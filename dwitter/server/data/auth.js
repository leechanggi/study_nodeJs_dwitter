let users = [
  // {
  //   id: '1',
  //   username: 'lcg0425',
  //   password: '',
  //   name: '이창기',
  //   email: 'lxyex1379@naver.com',
  //   url: '',
  // },
];

export async function findByUsername(username) {
  return users.find((user) => user.username.toString() === username);
}

export async function findById(id) {
  return users.find((user) => user.id.toString() === id);
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
