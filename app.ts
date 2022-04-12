import express, { Express, Request, Response } from "express";
import { getTasks } from "./controllers";
export const app: Express = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => res.send("pomodorodomop!"));

app.get("/:user/tasks", getTasks);
