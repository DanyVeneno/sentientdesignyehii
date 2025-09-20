import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  // Some platforms (notably certain Windows builds) emit an 'error'
  // asynchronously when using the `reusePort` option (ENOTSUP). To
  // handle that, attach an error listener before calling listen and
  // fall back to a plain listen() if we see ENOTSUP.
  let fallbackAttempted = false;
  const onListenError = (err: any) => {
    // handle ENOTSUP (operation not supported) by falling back
    if (!fallbackAttempted && err && (err.code === "ENOTSUP" || err.code === "EOPNOTSUPP")) {
      fallbackAttempted = true;
      log(`listen with options failed (${err.code}), falling back to simple listen`);
      // remove this listener and try the simpler listen call
      server.removeListener("error", onListenError);
      server.listen(port, "0.0.0.0", () => {
        log(`serving on port ${port}`);
      });
    } else {
      // rethrow/unhandled errors so they surface
      throw err;
    }
  };

  server.on("error", onListenError);
  server.listen({ port, host: "0.0.0.0", reusePort: true }, () => {
    // successful start; remove error handler
    server.removeListener("error", onListenError);
    log(`serving on port ${port}`);
  });
})();
