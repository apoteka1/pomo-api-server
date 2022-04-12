import { QueryResult } from "pg";
import { db } from "./db/connection";
type Task = {
	task_id: number;
	author: string;
	stage: number;
	body: string;
};

export const fetchTasks = async (user: string) => {
	const result: QueryResult = await db.query(
		`SELECT * FROM tasks WHERE author = $1;`,
		[user]
	);

	const tasks: Task[] = result.rows;
	return tasks;
};
