let users = [
  // {
  //   id: '1',
  //   username: 'lcg0425',
  //   password:
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2ODE3MzY3NTU4NjIiLCJpYXQiOjE2ODE3MzY3NzAsImV4cCI6MTY4MTkwOTU3MH0.PXHuL0Y_bf8oFafBbmDWmE0nLHKvsTPaEBzAAygkcww',
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
