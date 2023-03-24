import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";
import "express-async-errors";

const app = express();
const port = 8080;

app.use(express.json());

// **** Route ****
// app.get("/", (req, res, next) => {
//   res.send("Hello World!");
// });

// app.post("/", (req, res, next) => {
//   console.log(req.body);
// });

app
  .route("/")
  .get((req, res, next) => {
    res.send("Hello World!");
  })
  .post((req, res, next) => {
    console.log(req.body);
  });

// **** Req && Res Method ****
app.get("/board/:id", (req, res, next) => {
  console.log(req.path);
  console.log(req.headers);
  console.log(req.params);
  console.log(req.params.id);
  console.log(req.query);
  console.log(req.query.userId);

  // res.json({ name: "Lee" });
  // res.sendStatus(400);
  // res.setHeader("key", "value");
  // res.status(201).send(`create board ${req.params.id}`);
  res.send(`board ${req.params.id}`);
});

// **** Next Method ****
app.get(
  "/viewer/:id",
  (req, res, next) => {
    console.log("first");
    next();
    // next("route"); // => console.log('first2') 를 건너뜀.
    // next(new Error("error"));
  },
  (req, res, next) => {
    console.log("first2");
    next();
  }
);
app.get("/viewer/:id", (req, res, next) => {
  console.log("second");
  res.send("this is middleware!");
});

// **** All Method ****
app.all("/api", (req, res, next) => {
  // ** all은 "/api" 특정한 경로에만 미들웨어를 수행, all 과 use 둘다 사용시에는 all 먼저 수행
  console.log("all api/");
  next();
});

app.all("/api/*", (req, res, next) => {
  console.log("all api/*");
  next();
});

app.use("/api", (req, res, next) => {
  // ** use은 "/api/~" 경로에 모두 미들웨어를 수행
  console.log(req.params.id);
  if (req.params.id) {
    return res.send("this is conditional... all and use method!");
    // 조건부 send 사용시에 return 해서 send가 중복되지 않게해야만 한다.
  }
  console.log("use api/*");
  res.send("this is all and use method!");
});

// **** Async Error handleing(비동기적 에러 처리) ****
app.get("/file", (req, res) => {
  fs.readFile("./file1.txt", (err, data) => {
    if (err) {
      res.sendStatus(404);
    }
  });
});

app.get("/file2", (req, res) => {
  const data = fs.readFileSync("./file2.txt");
  res.send(data);
});

app.get("/file3", (req, res) => {
  try {
    const data = fs.readFileSync("./file3.txt");
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
  }
});

app.get("/file4", (req, res) => {
  fsAsync
    .readFile("./file4.txt")
    .then((data) => res.send(data))
    .catch((error) => res.sendStatus(404));
});

app.get("/file5", async (req, res) => {
  try {
    const data = await fsAsync.readFile("./file5.txt");
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
  }
});

// npm i express-async-errors
app.get("/file6", async (req, res) => {
  return fsAsync
    .readFile("./file6.txt") //
    .then((data) => res.send(data));
});

app.get("/file7", async (req, res) => {
  const data = await fsAsync.readFile("./file7.txt");
  res.send(data);
});

// **** MiddleWare used for Error ****
app.use((req, res, next) => {
  res.status(404).send("Not found page!");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry, try later!");
});

app.listen(port, () => {
  console.log(
    `-------------------------------\nlistening http://localhost:${port}\n-------------------------------`
  );
});
