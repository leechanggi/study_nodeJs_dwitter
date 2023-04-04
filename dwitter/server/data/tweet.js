let tweets = [
  {
    id: 2,
    text: "테스트",
    createdAt: Date.now(),
    name: "사용자2",
    username: "user2",
    url: "",
  },
  {
    id: 1,
    text: "테스트",
    createdAt: Date.now(),
    name: "사용자1",
    username: "user1",
    url: "",
  },
];

export async function getAll() {
  return tweets;
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
