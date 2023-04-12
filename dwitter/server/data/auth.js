import bcrypt from 'bcrypt';
let users = [
  // {
  //   id: string,
  //   username: string,
  //   password: string,
  //   name: string,
  //   email: string,
  //   url: string?
  // }
];

export async function findByUsername(username) {
  const auth = await users.find(auth => auth.username.toString() === username);
  return auth;
}

export async function create({ username, password, name, email, url }) {
  const user = {
    id: Date.now().toString(),
    username,
    password,
    name,
    email,
    url,
  };
  users = [user, ...users];
  return user;
}

export async function compare(password, auth) {
  const result = bcrypt.compareSync(password, auth.password);
  return result;
}
