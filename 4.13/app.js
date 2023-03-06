const fs = require("fs").promises;

// read a file
fs.readFile("./text.txt", "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch(console.error);

// writing a file
fs.writeFile("./text.txt", "Hello!") //
  .catch(console.error);

// append a file
fs.appendFile("./text.txt", "Hello!") //
  .then(() => {
    // copy a file
    fs.copyFile("./text.txt", "./text2.txt") //
      .catch(console.error);
  })
  .catch(console.error);
