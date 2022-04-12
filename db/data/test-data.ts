type User = {
	email: string;
	password: string;
};

type Task = {
	author: string;
	stage: number;
	body: string;
};

export const users: User[] = [
	{ email: "test@test.com", password: "joe" },
	{ email: "test2@test.com", password: "joe2" },
];

export const tasks: Task[] = [
	{
		author: "test@test.com",
		stage: 2,
		body: "learn typescript",
	},
	{
		author: "test@test.com",
		stage: 3,
		body: "learn javascript",
	},
	{
		author: "test@test.com",
		stage: 1,
		body: "get job",
	},
	{
		author: "test2@test.com",
		stage: 2,
		body: "learn juggling",
	},
	{
		author: "test2@test.com",
		stage: 3,
		body: "learn trapeze",
	},
	{
		author: "test2@test.com",
		stage: 1,
		body: "get job",
	},
];
