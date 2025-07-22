<<<<<<< HEAD
import dotenv from "dotenv";
dotenv.config();

=======
>>>>>>> 93f10c2af69130f5769169a1ed73dc0c8d375d0b
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
<<<<<<< HEAD
export const db = drizzle({ client: pool, schema });
=======
export const db = drizzle({ client: pool, schema });
>>>>>>> 93f10c2af69130f5769169a1ed73dc0c8d375d0b
