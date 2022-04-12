import {
	dropTable,
	createUsers,
	createTasks,
	insertUsers,
	insertTasks,
} from "./manage-tables";

type Users = {
	email: string;
	password: string;
}[];

type Tasks = {
	author: string;
	stage: number;
	body: string;
}[];

export const seed = (users: Users, tasks: Tasks) => {
	return dropTable("tasks")
		.then(() => dropTable("users"))
		.then(() => createUsers())
		.then(() => createTasks())
		.then(() => insertUsers(users))
		.then(() => insertTasks(tasks));
};
