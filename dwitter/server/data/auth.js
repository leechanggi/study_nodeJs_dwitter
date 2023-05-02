import SQ from 'sequelize';
import { sequelize } from '../db/database.js';

const DataTypes = SQ.DataTypes;

const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    username: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);

export async function findByUsername(username) {
  return User.findOne({ where: { username } });
}

export async function findById(id) {
  // return sequelize.execute('SELECT * FROM users WHERE id=?', [id]).then(result => result[0][0]);
}

export async function create(user) {
  const { username, password, name, email, url } = user;
  // return sequelize
  //   .execute('INSERT INTO users (username, password, name, email, url) VALUES (?, ?, ?, ?, ?)', [
  //     username,
  //     password,
  //     name,
  //     email,
  //     url,
  //   ])
  //   .then(result => result[0].insertId);
}
