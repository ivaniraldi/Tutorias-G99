import { readFile, writeFile } from "node:fs/promises";

const getUserByEmail = async (email) => {
  const data = await readFile("db/users.json", "utf-8");
  const users = JSON.parse(data);
  return users.find((user) => user.email === email);
};

const addUser = async (newUser) => {
  const data = await readFile("db/users.json", "utf-8");
  const users = JSON.parse(data);
  users.push(newUser);
  await writeFile("db/users.json", JSON.stringify(users, null, 2));
};

export const authModel = {
  getUserByEmail,
  addUser,
};
