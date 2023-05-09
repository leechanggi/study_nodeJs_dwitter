import Mongoose from 'mongoose';
import { useVirtualId } from '../db/database.js';
import * as userRep from './auth.js';

const tweetSchema = new Mongoose.Schema(
  {
    text: { type: String, require: true },
    userId: { type: String, require: true },
    username: { type: String, require: true },
    name: { type: String, require: true },
    email: { type: String, require: true },
    url: { type: String },
  },
  { timestamps: true }
);

useVirtualId(tweetSchema);

const Tweet = Mongoose.model('tweet', tweetSchema);

export async function getAll() {
  return Tweet.find().sort({ createAt: -1 });
}

export async function getAllByUsername(username) {
  return Tweet.find({ username }).sort({ createAt: -1 });
}

export async function getById(id) {
  return Tweet.findById(id).exec();
}

export async function create(text, userId) {
  const { username, name, email, url } = await userRep.findById(userId);
  const tweet = {
    text,
    userId,
    username,
    name,
    email,
    url,
  };
  return new Tweet(tweet).save();
}

export async function update(id, text) {
  return await Tweet.findByIdAndUpdate(id, { $set: { text } }, { returnDocument: 'after' });
}

export async function remove(id) {
  return Tweet.findByIdAndDelete(id);
}
