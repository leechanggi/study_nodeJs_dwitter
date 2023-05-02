import mysql from 'mysql2';
import { config } from '../config.js';
import SQ from 'sequelize';

const { host, user, password, port, database } = config.db;
export const sequelize = new SQ.Sequelize(database, user, password, {
  host,
  port,
  dialect: 'mysql',
});
