const os = require("os");

// \r => CR(캐리지 리턴, 엔터), \n => LF(줄 바꿈)

console.log(os.EOL === "\n"); // Unix / Mac OS X에서 줄 바꾸기 문자
console.log(os.EOL === "\r\n"); // Windows에서 줄 바꾸기 문자

// EOL(End Of the Line) : 운영 체제에서 지정한 대로 줄 끝 문자 또는 마커를 가져오는 데 사용되는 os 모듈의 내장된 애플리케이션 프로그래밍 인터페이스
