import * as userRep from "./auth.js";

let tweets = [
  // {
  //   id: '1',
  //   text: '테스트1',
  //   createdAt: new Date().toString(),
  //   userId: '1',
  // },
];

export async function getAll() {
  return Promise.all(
    tweets.map(async (tweet) => {
      const { username, name, url } = await userRep.findById(tweet.userId);
      return { ...tweet, username, name, url };
    })
  );
}

export async function getAllByUsername(username) {
  return getAll().then((tweets) =>
    tweets.filter((tweet) => tweet.username.toString() === username)
  );
}

export async function getById(id) {
  const found = tweets.find((tweet) => tweet.id.toString() === id);
  if (!found) {
    return null;
  }
  const { username, name, url } = await userRep.findById(found.userId);
  return { ...found, username, name, url };
}

export async function create(text, userId) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    userId,
  };
  tweets = [tweet, ...tweets];
  console.log(tweets);
  return getById(tweet.id);
}

export async function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id.toString() === id);
  if (tweet) {
    tweet.text = text;
  }
  return getById(tweet.id);
}

export async function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id.toString() !== id);
}
