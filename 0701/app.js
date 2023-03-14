const fs = require("fs");

const path = require("path");
const pathTest = path.join(__dirname, "test");
const pathPicture = path.join(__dirname, "picture");
const pathVideo = path.join(__dirname, "picture", "video");
const pathCaptured = path.join(__dirname, "picture", "captured");
const pathDuplicated = path.join(__dirname, "picture", "duplicated");

!fs.existsSync(pathPicture) && fs.mkdirSync(pathPicture);
!fs.existsSync(pathVideo) && fs.mkdirSync(pathVideo);
!fs.existsSync(pathCaptured) && fs.mkdirSync(pathCaptured);
!fs.existsSync(pathDuplicated) && fs.mkdirSync(pathDuplicated);

const newDir = {
  video: [],
  captured: [],
  duplicated: [],
  etc: [],
};

fs.promises
  .readdir(pathTest, { withFileTypes: true }) //
  .then((files) => {
    files.forEach((file) => {
      let ext = path.extname(file.name);

      if (ext == ".mp4" || ext == ".mov") {
        const readStream = fs.createReadStream(path.join(pathTest, file.name));
        const piping = readStream.pipe(
          fs.createWriteStream(path.join(pathVideo, file.name))
        );
      } else if (ext == ".png" || ext == ".aae") {
        const readStream = fs.createReadStream(path.join(pathTest, file.name));
        const piping = readStream.pipe(
          fs.createWriteStream(path.join(pathCaptured, file.name))
        );
      } else if (/^IMG_E/i.test(file.name)) {
        const readStream = fs.createReadStream(path.join(pathTest, file.name));
        const piping = readStream.pipe(
          fs.createWriteStream(path.join(pathDuplicated, file.name))
        );
      } else {
        return false;
      }
    });
    console.log(newDir);
  }) //
  .catch((err) => {
    console.log(err);
  });
