const fs = require("fs").promises;

// folder
fs.mkdir("sub-folder") //
  .catch(console.error);

fs.readdir("./") //
  .then(console.log)
  .catch(console.error);
