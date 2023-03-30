export default class TweetService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getTweets(username) {
    const query = username ? `?username=${username}` : "";
    const response = await fetch(`${this.baseURL}/tweets${query}`, {
      method: "GET",
      headers: { "Content-Type": "Application/json" },
    });
    const tweets = await response.json();
    if (response.status !== 200) {
      throw new Error(tweets.message);
    }
    return tweets;
  }

  async postTweet(text) {
    const response = await fetch(`${this.baseURL}/tweets`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ text, name: "postmen", username: "postmen" }),
    });
    const tweets = await response.json();
    if (response.status !== 201) {
      throw new Error(tweets.message);
    }
    return tweets;
  }

  async deleteTweet(tweetId) {
    const response = await fetch(`${this.baseURL}/tweets/${tweetId}`, {
      method: "DELETE",
      headers: { "Content-Type": "Application/json" },
    });
    if (response.status !== 204) {
      throw new Error();
    }
  }

  async updateTweet(tweetId, text) {
    const response = await fetch(`${this.baseURL}/tweets/${tweetId}`, {
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ text }),
    });
    const tweets = await response.json();
    if (response.status !== 200) {
      throw new Error(tweets.message);
    }
    return tweets;
  }
}
