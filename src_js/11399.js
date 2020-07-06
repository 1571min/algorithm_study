const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const personNumber = Number(input[0]);
  const timeArr = input[1].split(' ').map(ele=>Number(ele));
    if (personNumber === 1) {
      console.log(timeArr[0]);
    }else{
      timeArr.sort();
      let i_sum = 0;
      let min_sum = 0;
      timeArr.forEach(element => {
        min_sum += (i_sum + element);
        i_sum += element;
      });
      console.log(min_sum);
    }
  process.exit();
});
