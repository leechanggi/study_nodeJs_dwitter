let count = 0;

function increase() {
  count++;
}

function decrease() {
  count--;
}

function getCount() {
  console.log(count);
}

module.exports.getCount = getCount;
module.exports.increase = increase;

console.log(module.exports === exports); // true
exports = {};
console.log(module.exports === exports); // false => Node.js 에서는 값을 할당하는 순간 새로운 object 생성, 기존의 module.exports 가 아니다!
exports.decrease = decrease;

// module.exports 에서 module은 생략해서는 안된다. module.exports 와 exports 의 값이 다른곳에 할당되기 때문이다. 위와 같이 exports에 새로운 값을 할당하고 decrease 함수를 모듈에 추가하려고 한다면 module.exports에는 해당 함수가 추가되지 않는것을 확인할수 있다.

console.log(module);
