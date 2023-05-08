// import MongoDB from 'mongodb';
import mongoose from "mongoose";
import { config } from "../config.js";

const url = config.db.host;

export async function connectDB() {
  return mongoose.connect(url);
}

const userSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  name: { type: String, require: true },
  email: { type: String, require: true },
  url: { type: String },
});

const tweetSchema = new mongoose.Schema({
  text: { type: String, require: true },
  createAt: { type: Date, default: Date.now },
});

export const UserModel = mongoose.model("user", userSchema);
export const TweetModel = mongoose.model("tweet", tweetSchema);
