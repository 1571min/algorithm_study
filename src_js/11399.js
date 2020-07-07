const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function getSumTime(Arr, n) {
  let result = 0;
  let temp = 0;
  for (let i = 0; i < n; i++) {
    temp += Arr[i];
    result += temp;
  }
  return result;
}
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const personNumber = parseInt(input[0]);
  const timeArr = input[1].split(' ').map((ele) => parseInt(ele));
  let result = getSumTime(
    timeArr.sort((a, b) => a - b),
    personNumber
  );
  console.log(result);
  process.exit();
});
