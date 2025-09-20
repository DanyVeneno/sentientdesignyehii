import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  // Try multiple likely locations for the built client (dist/public). When
  // the server is bundled the relative paths can change, so prefer checking
  // a set of candidates and pick the first that exists.
  const candidates = [
    // when running from project root
    path.resolve(process.cwd(), "dist", "public"),
    // when running from server directory (unbundled)
    path.resolve(import.meta.dirname, "..", "dist", "public"),
    // when the build is placed next to the server bundle
    path.resolve(import.meta.dirname, "public"),
    // fallback: client/dist inside repo (unlikely but safe)
    path.resolve(import.meta.dirname, "..", "client", "dist", "public"),
  ];

  const distPath = candidates.find((p) => fs.existsSync(p));

  if (!distPath) {
    throw new Error(
      `Could not find the build directory. Looked for:
  ${candidates.join("\n  ")}
Make sure to run 'npm run build' and that the client build output is in one of the above locations.`,
    );
  }

  log(`serving static assets from ${distPath}`);
  app.use(express.static(distPath));

  // fall through to index.html for SPA routing
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
