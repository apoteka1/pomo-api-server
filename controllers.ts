import { fetchTasks } from "./models";
import { Request, Response, NextFunction } from "express";

export const getTasks = (req: Request, res: Response, next: NextFunction) => {
	const { user } = req.params;
	fetchTasks(user)
		.then((tasks) => {
			res.status(200).send([tasks]);
		})
		.catch(next);
};
