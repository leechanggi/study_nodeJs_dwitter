import { config } from '../config.js';
import mysql from 'mysql2';

const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.pw,
  port: config.db.port,
  database: config.db.database,
  connectTimeout: 5000,
  connectionLimit: 30,
});

export const db = pool.promise();
