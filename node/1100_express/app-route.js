import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; //요청된 쿠키를 쉽게 추출할 수 있도록 도와줌
import morgan from "morgan"; //요청과 응답에 대한 정보를 콘솔에 기록
import helmet from "helmet";

import postRouter from "./router/post.js";
import userRouter from "./router/user.js";

const app = express();
const port = 8080;
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
  origin: ["http://127.0.0.1:5500"],
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(express.json());
app.use(cookieParser()); // cookie-parser
app.use(morgan("tiny")); // morgan
app.use(helmet());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, DELETE"
//   );
//   next();
// });
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false })); //HTML Form
app.use(express.static("public", options));

app.get("/", (req, res, next) => {
  console.log(req.body);
  console.log(req.cookies);
  res.send("Welcome");
});
app.use("/posts", postRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(
    `-------------------------------\nlistening http://localhost:${port}\n-------------------------------`
  );
});
