import * as tweetRep from "../data/tweet.js";

export async function getTweets(req, res, next) {
  const username = req.query.username;
  const tweet = await (username
    ? tweetRep.getAllByUsername(username) //
    : tweetRep.getAll());
  res.status(200).json(tweet);
}

export async function createTweets(req, res) {
  const { text, userId } = req.body;
  const tweet = await tweetRep.create(text, userId);
  res.status(201).json(tweet);
}

export async function getTweet(req, res) {
  const id = req.params.id;
  const tweet = await tweetRep.getById(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `작성하신 게시글이 없습니다.(:${id})` });
  }
}

export async function updateTweet(req, res) {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = await tweetRep.update(id, text);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `해당 게시글을 찾을수 없습니다.(:${id})` });
  }
}

export async function deleteTweet(req, res) {
  const id = req.params.id;
  await tweetRep.remove(id);
  res.sendStatus(204);
}
