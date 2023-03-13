// 스트림(Stream): 데이터의 흐름
// - 일정한 크기로 나눠서 여러번에 걸쳐서 처리
// - 버퍼(또는 청크)의 크기를 작게 만들어서 주기적으로 데이터를 전달
// - 스트리밍: 일정한 크기의 데이터를 지속적으로 전달하는 작업
// - 버퍼방식에 비해 메모리를 절약할 수 있다.(파일을 작게 잘라서 보내는만큼 그 작은 파일의 사이즈만큼만 메모리를 사용함.)

const fs = require("fs");

const data = [];
fs.createReadStream("./file.txt", {
  // highWaterMark: 8, // default : 64KiB
  encoding: "utf-8",
})
  .on("data", (chunk) => {
    // console.log(chunk);
    data.push(chunk);
    console.count("data");
  })
  .on("end", () => {
    console.log(data.join(""));
  })
  .on("error", (error) => {
    console.log(error);
  });
