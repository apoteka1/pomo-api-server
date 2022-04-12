import { Pool } from "pg";
import * as dotenv from "dotenv";
const ENV = process.env.NODE_ENV || "development";

dotenv.config({
	path: `${__dirname}/../../.env.${ENV}`,
});
if (!process.env.PGDATABASE) {
	throw new Error("PGDATABASE not set");
}

// const config =
// 	ENV === "production"
// 		? {
// 				connectionString: process.env.DATABASE_URL,
// 				ssl: {
// 					rejectUnauthorized: false,
// 				},
// 		  }
// 		: {};

export const db = new Pool();
