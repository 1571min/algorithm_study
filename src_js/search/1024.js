const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let [N, L] = input[0].split(' ').map((e) => parseInt(e));

  let result = [];
  while (L < N / 2) {
    if (L > 100) {
      break;
    }
    for (let i = 1; i < N / 2 - L; i++) {
      const sum = (L * (i + i + L - 1)) / 2;
      if (sum === N) {
        for (let j = i; j < i + L; j++) {
          result.push(j);
        }
        console.log(result.join(' '));
        break;
      } else if (sum > N) {
        break;
      }
    }
    if (result.length) break;
    L += 1;
  }
  if (!result.length || L > 100) {
    console.log(-1);
  }
  process.exit();
});
