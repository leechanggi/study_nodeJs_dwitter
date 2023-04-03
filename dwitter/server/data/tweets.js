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

export function getAll() {
  return tweets;
}

export function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username.toString() === username);
}

export function getById(id) {
  return tweets.find((tweet) => tweet.id.toString() === id);
}

export function create(text, name, username) {
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

export function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export function remove(id) {
  tweets = tweets.filter((t) => t.id.toString() !== id);
}
