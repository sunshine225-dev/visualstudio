import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fonction de log simple pour la production
export const log = (message) => {
  console.log(`[${new Date().toISOString()}] ${message}`);
};

// Servir les fichiers statiques en production
export const serveStatic = (app) => {
  // Servir les fichiers statiques depuis le dossier public
  app.use(express.static(path.join(__dirname, "../public")));
  
  // Catch-all pour SPA (Single Page Application)
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};