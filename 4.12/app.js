const fs = require("fs");

// 3
// rename(..., callback(error, data))
// try { renameSync(...) } catch(e) { } => fs는 callback으로 사용하지 않는것을 권장
// promises.rename().then().catch(0)

try {
  fs.renameSync("./text.txt", "./text-new.txt");
} catch (error) {
  console.log(error);
}

fs.rename("./text-new.txt", "./text.txt", (error) => {
  console.log(error);
});

fs.promises
  .rename("./text2.txt", "./text2-new.txt")
  .then(() => console.log("done"))
  .catch(console.error);
