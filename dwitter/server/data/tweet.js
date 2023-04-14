import * as userRep from "./auth.js";

let tweets = [
  {
    id: 1,
    userId: "lcg0425",
    text: "테스트",
    createdAt: Date.now().toString(),
  },
  {
    id: 2,
    userId: "lcg0425",
    text: "테스트",
    createdAt: Date.now().toString(),
  },
];

export async function getAll() {
  return Promise.all(
    tweets.map(async (tweet) => {
      const { name, username, url } = await userRep.findById(tweet.userId);
      return { ...tweet, name, username, url };
    })
  );
}

export async function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username.toString() === username);
}

export async function getById(id) {
  return tweets.find((tweet) => tweet.id.toString() === id);
}

export async function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweet;
}

export async function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export async function remove(id) {
  tweets = tweets.filter((t) => t.id.toString() !== id);
}
