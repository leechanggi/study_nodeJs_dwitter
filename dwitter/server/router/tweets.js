import express from "express";
import "express-async-errors";

const router = express.Router();

let tweets = [
  {
    id: 2,
    text: "TEST",
    createdAt: Date.now(),
    name: "testmen",
    username: "testmen",
    url: "",
  },
  {
    id: 1,
    text: "TEST",
    createdAt: Date.now(),
    name: "testmen",
    username: "testmen2",
    url: "",
  },
];

router.get("/", (req, res, next) => {
  const username = req.query.username;
  const tweet = username
    ? tweets.filter((t) => t.username.toString() === username)
    : tweets;
  res.status(200).json(tweet);
});

router.post("/", (req, res) => {
  const { text, name, username } = req.body;
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((t) => t.id.toString() === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet ${id} not found` });
  }
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((t) => t.id.toString() === id);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet ${id} not found` });
  }
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((t) => t.id.toString() !== id);
  res.sendStatus(204);
});

export default router;
