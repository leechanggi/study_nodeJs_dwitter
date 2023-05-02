import { config } from './config.js';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';

import tweetsRouter from './router/tweets.js';
import authRouter from './router/auth.js';

import { initSocket } from './connection/socket.js';
import { db } from './db/database.js';

const app = express();
const hostServer = config.host.server;
const hostClient = config.host.client;
const options = {
  dotfiles: 'ignore',
  etag: false,
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  },
};
const corsOptions = {
  origin: [`http://localhost:${hostClient}`],
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public', options));

// API router
app.use('/tweets', tweetsRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.sendStatus(500);
});

db.getConnection().then(connection => {
  // console.log(connection);
});
const server = app.listen(hostServer);
initSocket(server);
