const http = require("http");
const fs = require("fs");
// const http2 = require("http2"); // https, 개발환경에서는 사용되지 않음. 배포 시 변경

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const server = http.createServer((req, res) => {
  console.log("incoming...");

  // console.log(req.headers);
  // console.log(req.httpVersion);
  // console.log(req.method);
  // console.log(req.url);

  const url = req.url;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./html/index.html").pipe(res);
  } else if (url === "/courses") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./html/courses.html").pipe(res);
  } else {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./html/not-found.html").pipe(res);
  }

  // res.end(); // pipe() 에서 res.end()를 처리해주기 때문에 중복으로 작성해주지 않아도 된다!
});

server.listen(8080);
