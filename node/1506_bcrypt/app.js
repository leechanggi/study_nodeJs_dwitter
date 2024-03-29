import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import "express-async-errors";
import bcrypt from "bcrypt";

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
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public", options));

//
app.get("/", (req, res) => {
  const tempPw = "abcd1234";
  const hashed = bcrypt.hashSync(tempPw, 10); // 8 ~ 12 정도가 적당
  console.log(`password: ${tempPw}, hashed: ${hashed}`);

  const result = bcrypt.compareSync("efgx4567", hashed);
  console.log(`compare: ${result}`);

  res.send("HOME");
});

//

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(port, () => {
  console.log(
    `-------------------------------\nlistening http://localhost:${port}\n-------------------------------`
  );
});
