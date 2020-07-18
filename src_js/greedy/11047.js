const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let [N, K] = input[0].split(' ').map((ele) => parseInt(ele));
  let result = 0;
  for (let i = N; i >0; i--) {
    const num = Number(input[i]);
    if(K>=num){
      result += Math.floor(K/num);
      K -= (Math.floor(K/num) * num);
    }
  }
  console.log(result);
  process.exit();
});
