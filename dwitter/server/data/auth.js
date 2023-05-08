import { UserModel } from "../db/database.js";

export async function findByUsername(username) {
  return UserModel.findOne({ username }).exec();
}

export async function findById(id) {
  return UserModel.findById(id).exec();
}

export async function create(user) {
  return UserModel.create(user);
}
