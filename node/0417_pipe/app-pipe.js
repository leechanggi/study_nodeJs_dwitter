// pipe() 메서드: 여러개의 스트림을 이어 중간에 전달되는 데이터에 다른 조작을 가할 수 있다.
// - 여러개의 스트림을 pipe를 이용해 연결할 수 있다.
const fs = require("fs");
const zlib = require("zlib"); // Nodejs에서 제공하는 압축 모듈

const zlibStream = zlib.createGzip();
const readStream = fs.createReadStream("./file.txt");
const writeStream = fs.createWriteStream("./file4.zip");
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on("finish", () => {
  console.log("done!!");
});

// 예시
const http = require("http");
const server = http.createServer((req, res) => {
  // fs.readFile("file.txt", (err, data) => {
  //   res.end(data);
  // });

  const stream  = fs.createReadStream('./file.txt')
  stream.pipe(res)
});
server.listen(3000);
