// this란(브라우저와의 차이점)
function hello() {
  console.log(this); // this === global
  console.log(this === global); // true
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log(`----- class -----`);
    console.log(this); // this === Obj
    console.log(this === global);
  }
}

const a = new A(1);
a.memberFunction();

console.log(`----- global scope -----`);
console.log(this); // this === module.exports
console.log(this === module.exports);
