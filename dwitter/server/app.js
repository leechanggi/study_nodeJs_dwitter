import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import "express-async-errors";

import tweetsRouter from "./router/tweets.js";
import authRouter from "./router/auth.js";

const app = express();
const DEV_SEVER_PORT = 8080;
const DEV_CLIENT_PORT = 3000;
const options = {
  dotfiles: "ignore",
  etag: false,
  index: false,
  maxAge: "1d",
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  },
};
const corsOptions = {
  origin: [`http://localhost:${DEV_CLIENT_PORT}`],
  optionsSuccessStatus: 200,
  credentials: true,
};

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public", options));

// API router
app.use("/tweets", tweetsRouter);
app.use("/auth", authRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(DEV_SEVER_PORT, () => {
  console.log(
    `-------------------------------\nlistening http://localhost:${DEV_SEVER_PORT}\n-------------------------------`
  );
});
