import { db } from "../connection";
import format from "pg-format";

type User = {
	email: string;
	password: string;
};

type Task = {
	author: string;
	stage: number;
	body: string;
};

const formatUser = (data: User) => {
	return [data.email, data.password];
};

const formatTask = (data: Task) => {
	return [data.author, data.stage, data.body];
};

export const dropTable = (table_name: string) => {
	return db.query(`DROP TABLE IF EXISTS ${table_name}`);
};

export const createUsers = () => {
	return db.query(`CREATE TABLE users (
        user_id SERIAL PRIMARY KEY,
      email TEXT,
      password TEXT NOT NULL
    )`);
};

export const createTasks = () => {
	return db.query(
		`CREATE TABLE tasks (
      task_id SERIAL PRIMARY KEY,
      author TEXT REFERENCES users(email) NOT NULL,
      stage INT NOT NULL,
      body TEXT NOT NULL
    )`
	);
};

export const insertUsers = (data: User[]) => {
	const inputArr = data.map(formatUser);

	const queryStr = format(
		`INSERT INTO users
    (email, password)
    VALUES %L`,
		inputArr
	);

	return db.query(queryStr);
};

export const insertTasks = (data: Task[]) => {
	const inputArr = data.map(formatTask);

	const queryStr = format(
		`INSERT INTO tasks
    (author, stage, body)
    VALUES %L`,
		inputArr
	);

	return db.query(queryStr);
};
