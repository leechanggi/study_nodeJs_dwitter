export default class AuthService {
  constructor(httpClient, accessTokenSecret) {
    this.http = httpClient;
    this.token = accessTokenSecret;
  }

  async login(username, password) {
    // return this.http.fetch(`/auth/`, {
    //   method: "POST",
    //   body: JSON.stringify({})
    // })
    return {
      username: "ellie",
      token: "abc1234",
    };
  }

  async me() {
    return {
      username: "ellie",
      token: "abc1234",
    };
  }

  async logout() {
    return;
  }

  async signup(username, password, name, email, url) {
    return {
      username: "ellie",
      token: "abc1234",
    };
  }
}
