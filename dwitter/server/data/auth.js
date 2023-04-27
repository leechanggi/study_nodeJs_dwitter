let users = [
  {
    id: "1682564948169",
    username: "lcg0426",
    password: "$2b$12$dgTiwQvj31m09q4.D9r34uYbe38EBGVWnlMtShycFxdCDX0DlfmEy", //12345679
    name: "이창재",
    email: "lcg0425@naver.com",
    url: "",
  },
  {
    id: "1682564879418",
    username: "lcg0425",
    password: "$2b$12$BfOmR2z5QUjgGJTGE8nXs.Y.EjGfg2qCpU06TBP09dfFUelBC8zVi", //12345678
    name: "이창기",
    email: "lcg0425@naver.com",
    url: "",
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.username.toString() === username.toString());
}

export async function findById(id) {
  return users.find((user) => user.id == id);
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
  console.log(users);
  return user;
}
