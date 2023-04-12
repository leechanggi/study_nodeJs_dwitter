import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'express-async-errors';

import * as userRep from '../data/auth.js';

const JWT_SECRET_KEY = 'CAsSu&XLWAI#KJCsq+HBLfZfv+(4U2mu';
const JWT_EXPIRE_DAY = '2d';
const BC_SALT = 12;

export async function signup(req, res) {
  const { username, password, name, email, url } = req.body;
  const foundUsername = await userRep.findByUsername(username);
  if (foundUsername) {
    return res.status(409).json({ message: '사용할 수 없는 아이디 입니다.' });
  }
  const hashed = bcrypt.hashSync(password, BC_SALT);
  const userId = await userRep.create({
    username,
    password: hashed,
    name,
    email,
    url,
  });
  const token = createJwtToken(userId);
  res.status(201).json({ token, username });
}

export async function login(req, res) {
  const { username, password } = req.body;
  const user = await userRep.findByUsername(username);
  if (!user) {
    return res.status(401).json({ message: '아이디 혹은 비밀번호가 잘못되었습니다.' });
  }

  const isValidPassword = bcrypt.compareSync(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: '아이디 혹은 비밀번호가 잘못되었습니다.' });
  }

  const token = createJwtToken(user.id);
  res.status(200).json({ token, username });
}

export async function me(req, res) {
  res.send('me');
}

function createJwtToken(id) {
  return jwt.sign({ id }, JWT_SECRET_KEY, { expiresIn: JWT_EXPIRE_DAY });
}
