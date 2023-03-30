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

export function getAllTweets() {
  return tweets;
}

export function getAllTweetsByUsername(username) {
  return tweets.filter(tweet => tweet.username.toString() === username);
}

export function getTweetsById(id) {
  return tweets.find(tweet => tweet.id.toString() === id);
}

// export function
