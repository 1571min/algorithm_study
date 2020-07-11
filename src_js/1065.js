const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const N = Number(input[0]);
  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (i >= 100) {
      let hundreds = Math.floor(i / 100);
      let tens = Math.floor((i - hundreds * 100) / 10);
      let units = i - hundreds * 100 - tens * 10;
      if (hundreds - tens === tens - units) {
        count += 1;
      }
    } else {
      count += 1;
    }
  }
  console.log(count);
  process.exit();
});

function isHansu(num) {
  if (num <= 99) {
    return true;
  } else {
    const strArr = String(num)
      .split('')
      .map((ele) => parseInt(ele));
    const dist = strArr[1] - strArr[0];
    for (let i = 0; i < strArr.length - 1; i++) {
      if (strArr[i + 1] - strArr[i] !== dist) {
        return false;
      }
    }
    return true;
  }
}
