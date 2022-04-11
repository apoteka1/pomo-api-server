import express, { Express, Request, Response } from "express";
// import dotenv from "dotenv";
export const app: Express = express();

app.get("/", (req: Request, res: Response) => res.send("Hello World!"));
