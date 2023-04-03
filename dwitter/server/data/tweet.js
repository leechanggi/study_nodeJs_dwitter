let tweets = [
  {
    id: 2,
    text: 'TEST',
    createdAt: Date.now(),
    name: 'testmen',
    username: 'testmen',
    url: '',
  },
  {
    id: 1,
    text: 'TEST',
    createdAt: Date.now(),
    name: 'testmen',
    username: 'testmen2',
    url: '',
  },
];

export async function getAll() {
  return tweets;
}

export async function getAllByUsername(username) {
  return tweets.filter(tweet => tweet.username.toString() === username);
}

export async function getById(id) {
  return tweets.find(tweet => tweet.id.toString() === id);
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
  const tweet = tweets.find(tweet => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export async function remove(id) {
  tweets = tweets.filter(t => t.id.toString() !== id);
}
