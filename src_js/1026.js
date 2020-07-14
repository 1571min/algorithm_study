const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  var N = parseInt(input.shift());
  const arrayA = input[0].split(' ').map((ele) => parseInt(ele));
  const arrayB = input[1].split(' ').map((ele) => parseInt(ele));

  arrayA.sort();
  arrayB.sort((a, b) => b - a);

  console.log(arrayA);
  console.log(arrayB);

  let result = 0;
  for (let i = 0; i < arrayA.length; i++) {
    result += arrayA[i] * arrayB[i];
  }
  console.log(result);

  process.exit();
});
