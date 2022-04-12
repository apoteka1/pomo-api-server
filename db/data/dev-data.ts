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
	{ email: "dev@test.com", password: "joe" },
	{ email: "dev2@test.com", password: "joe2" },
];
export const tasks: Task[] = [
	{
		author: "dev@test.com",
		stage: 2,
		body: "learn typescript",
	},
	{
		author: "dev@test.com",
		stage: 3,
		body: "learn javascript",
	},
	{
		author: "dev@test.com",
		stage: 1,
		body: "get job",
	},
	{
		author: "dev2@test.com",
		stage: 2,
		body: "learn juggling",
	},
	{
		author: "dev2@test.com",
		stage: 3,
		body: "learn trapeze",
	},
	{
		author: "dev2@test.com",
		stage: 1,
		body: "get job",
	},
];
