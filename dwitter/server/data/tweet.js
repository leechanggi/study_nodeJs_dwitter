import { sequelize } from '../db/database.js';

const SELECT_JOIN =
  'SELECT tw.id, tw.text, tw.createdAt, tw.userId, us.username, us.name, us.url FROM tweets as tw JOIN users as us ON tw.userId=us.id';
const ORDER_DESC = 'ORDER BY tw.createdAt DESC';

export async function getAll() {
  // return sequelize
  //   .execute(`${SELECT_JOIN} ${ORDER_DESC}`) //
  //   .then(result => result[0]);
}

export async function getAllByUsername(username) {
  // return sequelize
  //   .execute(`${SELECT_JOIN} WHERE username=? ${ORDER_DESC}`, [username]) //
  //   .then(result => result[0]);
}

export async function getById(id) {
  // return sequelize
  //   .execute(`${SELECT_JOIN} WHERE tw.id=?`, [id]) //
  //   .then(result => result[0][0]);
}

export async function create(text, userId) {
  // return sequelize
  //   .execute('INSERT INTO tweets (text, createdAt, userId) VALUES (?, ?, ?)', [
  //     text,
  //     new Date(),
  //     userId,
  //   ])
  //   .then(result => getById(result[0].insertId));
}

export async function update(id, text) {
  // return sequelize
  //   .execute('UPDATE tweets SET text=? WHERE id=?', [text, id])
  //   .then(result => getById(id));
}

export async function remove(id) {
  // return sequelize.execute('DELETE FROM tweets WHERE id=?', [id]);
}
