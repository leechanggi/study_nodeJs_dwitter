const http = require("http");
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
    res.write("Home");
  } else if (url === "/courses") {
    res.write("Courses");
  } else {
    res.write("Not found");
  }

  res.end();
});

server.listen(8080);
