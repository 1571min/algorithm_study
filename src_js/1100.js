const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(input);
  //짝수면 짝수에 흰칸
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      count += checkCount(input[i], 0);
    } else {
      count += checkCount(input[i], 1);
    }
  }
  //짝수면 홀수에 흰칸
  console.log(count);
  process.exit();
});

function checkCount(text, num) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (i % 2 === num) {
      if (text[i] === 'F') {
        count += 1;
      }
    }
  }
  return count;
}
