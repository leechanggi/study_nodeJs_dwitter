import { sequelize } from '../db/database.js';

export async function findByUsername(username) {
  return sequelize
    .execute('SELECT * FROM users WHERE username=?', [username])
    .then(result => result[0][0]);
}

export async function findById(id) {
  return sequelize.execute('SELECT * FROM users WHERE id=?', [id]).then(result => result[0][0]);
}

export async function create(user) {
  const { username, password, name, email, url } = user;
  return sequelize
    .execute('INSERT INTO users (username, password, name, email, url) VALUES (?, ?, ?, ?, ?)', [
      username,
      password,
      name,
      email,
      url,
    ])
    .then(result => result[0].insertId);
}
