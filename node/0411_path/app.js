const path = require("path");

console.log(__dirname);
console.log(__filename);

// OS별로 경로의 표시방식은 다르다
// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Window: 'C:\\temp\\myfile.html'

console.log(path.sep); // 경로구분자
console.log(path.delimiter); // 환경변수구분자

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js")); // 확장자 제거

// dirname
console.log(path.dirname(__filename)); // 파일 경로

// extension
console.log(path.extname(__filename)); // 확장자

// parse
const parsed = path.parse(__filename);
console.log(parsed);

const str = path.format(parsed);
console.log(str);

// isAbsolute?(절대경로, 상대경로)
console.log("isAbsolute?", path.isAbsolute(__dirname));
console.log("isAbsolute?", path.isAbsolute("../"));

// normalize(잘못된 경로 작성 수정)
console.log(path.normalize("./folder////////sub"));

// join
// console.log(__dirname + "\\" + "image");
// console.log(__dirname + path.sep + "image");
console.log(path.join(__dirname, "image"));
