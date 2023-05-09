import Mongoose from "mongoose";
import { useVirtualId } from "../db/database.js";

const userSchema = new Mongoose.Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  name: { type: String, require: true },
  email: { type: String, require: true },
  url: { type: String },
});

useVirtualId(userSchema);

const User = Mongoose.model("user", userSchema);

export async function findByUsername(username) {
  return User.findOne({ username }).exec();
}

export async function findById(id) {
  return User.findById(id).exec();
}

export async function create(user) {
  return new User(user).save().then((data) => data.id);
}
