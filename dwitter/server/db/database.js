// import MongoDB from 'mongodb';
import mongoose from 'mongoose';
import { config } from '../config.js';

const url = config.db.host;
let db;

export async function connectDB() {
  return mongoose
    .connect(url) //
    .then(client => (db = client.db()));
}

const userSchema = new mongoose.Schema({
  userid: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  name: { type: String, require: true },
  email: { type: String, require: true },
  url: { type: String },
});

const tweetSchema = new mongoose.Schema({
  text: { type: String, require: true },
  createAt: { type: Date, default: Date.now },
});

export const UserModel = mongoose.model('user', userSchema);

// export function getUsers() {
//   return db.collection('users');
// }

// export function getTweets() {
//   return db.collection('tweets');
// }
