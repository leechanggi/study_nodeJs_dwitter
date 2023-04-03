import express from "express";
import "express-async-errors";
import * as tweetRepos from "../data/tweets.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  const username = req.query.username;
  const tweet = username
    ? tweetRepos.getAllByUsername(username) //
    : tweetRepos.getAll;
  res.status(200).json(tweet);
});

router.post("/", (req, res) => {
  const { text, name, username } = req.body;
  const tweet = tweetRepos.create(text, name, username);
  res.status(201).json(tweet);
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweetRepos.getById(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet ${id} not found` });
  }
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweetRepos.update(id, text);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet ${id} not found` });
  }
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweetRepos.remove(id);
  res.sendStatus(204);
});

export default router;
