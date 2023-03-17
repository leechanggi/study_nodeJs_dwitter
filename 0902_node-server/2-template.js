const http = require("http");
const fs = require("fs");
const ejs = require("ejs");
// const http2 = require("http2"); // https, 개발환경에서는 사용되지 않음. 배포 시 변경

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const name = "이창기";
const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "NodeJs" },
  { name: "EJS" },
];

const server = http.createServer((req, res) => {
  console.log("incoming...");

  // console.log(req.headers);
  // console.log(req.httpVersion);
  // console.log(req.method);
  // console.log(req.url);

  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    ejs
      .renderFile("./template/index.ejs", { name })
      .then((data) => res.end(data));
  } else if (url === "/courses") {
    ejs
      .renderFile("./template/courses.ejs", { name, courses })
      .then((data) => res.end(data));
  } else {
    ejs
      .renderFile("./template/not-found.ejs", { name })
      .then((data) => res.end(data));
  }

  // res.end(); // pipe() 에서 res.end()를 처리해주기 때문에 중복으로 작성해주지 않아도 된다!
});

server.listen(8080);
