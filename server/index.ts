import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import conditionnel de la fonction log et serveStatic
let log: (message: string) => void;
let serveStatic: ((app: express.Application) => void) | undefined;

if (process.env.NODE_ENV === "development") {
  // En développement, utiliser vite.js
  const viteModule = await import("./vite.js");
  log = viteModule.log;
} else {
  // En production, utiliser vite-production.js
  const viteProductionModule = await import("./vite-production.js");
  log = viteProductionModule.log;
  serveStatic = viteProductionModule.serveStatic;
}

// Middleware de log pour les requêtes /api
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined;

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

  // Middleware gestion d'erreur
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  if (process.env.NODE_ENV === "development") {
    const { setupVite } = await import("./vite.js");
    await setupVite(app, server);
  } else {
    // En production, utiliser serveStatic
    if (serveStatic) {
      serveStatic(app);
    }
  }

  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen(port, "0.0.0.0", () => {
    log(`serving on port ${port}`);
  });
})();