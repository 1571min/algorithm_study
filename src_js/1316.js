const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let resultCount = 0;
  input.shift();
  input.forEach((str) => {
    if (isGroup(str)) {
      resultCount += 1;
    }
  });
  console.log(resultCount);
  process.exit();
});

function isGroup(text) {
  const textArr = text.split(''); // 'h' 'a' 'p' ...
  let countObj = {};
  countObj[textArr[0]] = 1;
  for (let i = 0; i < textArr.length; i++) {
    if (textArr[i] !== textArr[i + 1]) {
      if (countObj.hasOwnProperty(text[i + 1])) {
        return false;
      } else {
        countObj[textArr[i + 1]] = 1;
      }
    } else {
      countObj[textArr[i + 1]] = 1;
    }
  }
  return true;
}
