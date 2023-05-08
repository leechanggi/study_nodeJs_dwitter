import { TweetModel } from "../db/database.js";
import * as userRep from "./auth.js";
// import MongoDB from "mongodb";

// const ObjectId = MongoDB.ObjectId;

export async function getAll() {
  // return getTweets() //
  //   .find()
  //   .sort({ createdAt: -1 })
  //   .toArray()
  //   .then((tweets) => tweets.map(mapOptionalTweet));
}

export async function getAllByUsername(username) {
  // return getTweets() //
  //   .find({ username })
  //   .sort({ createdAt: -1 })
  //   .toArray()
  //   .then((tweets) => tweets.map(mapOptionalTweet));
}

export async function getById(id) {
  // return getTweets() //
  //   .findOne({ _id: new ObjectId(id) })
  //   .then(mapOptionalTweet);
}

export async function create(text, userId) {
  // const { username, name, url } = await userRep.findById(userId);
  // const tweet = {
  //   text,
  //   createdAt: new Date(),
  //   userId,
  //   username,
  //   name,
  //   url,
  // };
  // return getTweets()
  //   .insertOne(tweet)
  //   .then((data) => {
  //     const newTweet = mapOptionalTweet({ ...tweet, _id: data.insertedId });
  //     return newTweet;
  //   });
}

export async function update(id, text) {
  // return getTweets()
  //   .findOneAndUpdate(
  //     { _id: new ObjectId(id) },
  //     { $set: { text } },
  //     { returnDocument: "after" }
  //   )
  //   .then((result) => result.value)
  //   .then(mapOptionalTweet);
}

export async function remove(id) {
  // return getTweets().deleteOne({ _id: new ObjectId(id) });
}

// function mapOptionalTweet(tweet) {
//   return tweet ? { ...tweet, id: tweet._id.toString() } : tweet;
// }
