const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const totalCash = Number(input[0]);
  console.log(getChangeCount(1000-totalCash));
  process.exit();
});

function getChangeCount(money){
  let count = 0;
  let coins = [500,100,50,10,5,1];
  coins.forEach(coin=>{
    if(money>=coin){
      count += Math.floor(money/coin);
      money %= coin;
    }
  });
  return count;
}
