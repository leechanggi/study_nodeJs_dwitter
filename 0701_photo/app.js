const fs = require('fs');
const path = require('path');

const pathTest = path.join(__dirname, 'test');
const pathPicture = path.join(__dirname, 'picture');
const pathVideo = path.join(__dirname, 'picture', 'video');
const pathCaptured = path.join(__dirname, 'picture', 'captured');
const pathDuplicated = path.join(__dirname, 'picture', 'duplicated');

function copyFile(org, dest, file) {
  const readStream = fs.createReadStream(path.join(org, file.name));
  const piping = readStream.pipe(fs.createWriteStream(path.join(dest, file.name)));
}

!fs.existsSync(pathPicture) && fs.mkdirSync(pathPicture);
!fs.existsSync(pathVideo) && fs.mkdirSync(pathVideo);
!fs.existsSync(pathCaptured) && fs.mkdirSync(pathCaptured);
!fs.existsSync(pathDuplicated) && fs.mkdirSync(pathDuplicated);

fs.promises
  .readdir(pathTest, { withFileTypes: true })
  .then(files => {
    files.forEach(file => {
      let ext = path.extname(file.name);
      if (ext == '.mp4' || ext == '.mov') {
        copyFile(pathTest, pathVideo, file);
      } else if (ext == '.png' || ext == '.aae') {
        copyFile(pathTest, pathCaptured, file);
      } else if (/^IMG_E/i.test(file.name)) {
        copyFile(pathTest, pathDuplicated, file);
      } else {
        return false;
      }
    });
  })
  .catch(err => {
    console.log(err);
  });
