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
  let i = 665;
  while (count < N) {
    i += 1;
    if (checkNumber(i)) {
      count += 1;
    }
  }
  console.log(i);
  process.exit();
});

function checkNumber(num) {
  const str = String(num);
  if (str.includes('666')) {
    return true;
  }
  return false;
}
