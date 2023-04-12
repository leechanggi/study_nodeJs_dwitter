import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const accessToken = process.env.ACCESS_TOKEN_SECRET;
// const refreshToken = process.env.REFRESH_TOKEN_SECRET;
let auths = [
  // {
  //   id: string,
  //   username: string,
  //   password: string,
  //   name: string,
  //   email: string,
  //   url: string?
  // }
];

export async function getByUsername(username) {
  const auth = await auths.find(
    (auth) => auth.username.toString() === username
  );
  return auth;
}

export async function create(username, password, name, email, url) {
  const hashed = bcrypt.hashSync(password, 10);
  const auth = {
    id: Date.now().toString(),
    username,
    password: hashed,
    name,
    email,
    url,
  };
  auths = [auth, ...auths];
  return auth;
}

export async function compare(auth, password) {
  const result = bcrypt.compareSync(password, auth.password);
  return result;
}
