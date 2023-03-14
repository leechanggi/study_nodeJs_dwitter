const fs = require('fs');
const path = require('path');

// 계획
// 1. 사용자가 원하는 폴더에 이름을 받아온다.

const folder = process.argv[2];
const workingDir = path.join(__dirname, folder);

if (!folder || !fs.existsSync(workingDir)) {
  console.error('Please enter folder name in Pictures');
  return;
}

// 2. 그 폴더안에 video, captured, duplicated 폴더를 만든다.

// 3. 폴더 안에 있는 파일들을 다 돌면서 해당하는 mp4|mo png|aae, IMG_1234 (IMG_E1234)
