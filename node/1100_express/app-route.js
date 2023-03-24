import express from "express";
import cors from "cors";

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

app.use(express.json()); // REST API, Body
app.use(express.urlencoded({ extended: false })); //HTML Form
app.use(express.static("public", options));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "OPTIONS, GET, POST, PUT, DELETE"
//   );
//   next();
// });

// npm install cors

app.use(
  cors({
    origin: ["http://127.0.0.1:5500"],
  })
);

app.use("/posts", postRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(
    `-------------------------------\nlistening http://localhost:${port}\n-------------------------------`
  );
});
