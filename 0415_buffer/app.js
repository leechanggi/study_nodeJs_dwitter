// **buffer
// Fixed-size chuck of memory, 고정된 크기의 메모리 덩어리
// array of  intergers, byte of data

// 버퍼(Buffer): 일정한 크기로 모아두는 데이터
// - 일정한 크기가 되면 한 번에 처리
// - 버퍼링: 버퍼에 데이터가 찰 때까지 모으는 작업

// nodejs 는 16진수를 활용하여 바이트를 표현
// 인) 근데 버퍼는 왜 필요한걸까? 버퍼가 도입되기 이전에는 자바스크립트에서는 이 바이너리 데이터를 처리할 방법이 마땅히 없었다. 속도가 느리고, 바이너리를 처리할 전문적인 도구가 없기 때문에 기존에는 문자열 (string)과 같은 원시 값들을 이용해야 했다. 버퍼는 비트와 바이트를 조금더 쉽게, 그리고 성능에도 유리한 방법으로 조작할 수 있도록 제공되고 있다.

const fs = require("fs");
const buf = Buffer.from("Hi");

console.log(buf); //16진수 0x48 = H, 0x69 = i
console.log(buf.length);
console.log(buf[0]); // H = 72, i = 105
console.log(buf[1]); // 배열의 형태로 출력할 경우에는 아스키코드로 출력됨
console.log(buf.toString()); // toString 으로 text로 출력

// **create

const buf2 = Buffer.alloc(2);
console.log(buf2); // <Buffer 00 00>
// 메소드는 데이터를 채울 필요가 없는 빈 버퍼를 생성하고 싶을 때 유용하다. 기본적으로, 숫자를 인수로 받으며 받은 숫자만큼의 빈 사이즈의 버퍼를 생성한다.

const buf3 = Buffer.allocUnsafe(2);
console.log(buf3); // <Buffer ?? ??>
// 받은 숫자만큼의 버퍼를 생성하지만 초기화 하지 않음. 어떤 값이 들어가있는지 알수없다. 사용하지 않는다.

buf2[0] = 72; // 위와 반대로 배열의 형태로 데이터를 입력할때는 아스키코드로 입력한다.
buf2[1] = 105;
console.log(buf2.toString()); // Hi

buf2.copy(buf3); // buffer의 복사 => buf2의 데이터를 buf3에 복사한다.
console.log(buf3.toString()); // Hi

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString()); // HiHiHi
