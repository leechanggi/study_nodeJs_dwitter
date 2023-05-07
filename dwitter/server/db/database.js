import MongoDB from 'mongodb';
import { config } from '../config.js';

const url = config.db.host;
let db;

export async function connectDB() {
  return MongoDB.MongoClient.connect(url) //
    .then(client => (db = client.db()));
}

export function getUsers() {
  return db.collection('users');
}

export function getTweets() {
  return db.collection('tweets');
}
