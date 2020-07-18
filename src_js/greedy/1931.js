const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  input.shift();
  const sessionArr = input.map((ele) => ele.split(' ').map((e) => parseInt(e)));
  sessionArr.sort((a, b) => {
    if(a[1]!==b[1]){
      return a[1] - b[1];
    }else{
      return a[0] - b[0];
    }
  });
  console.log(getSessionCount(sessionArr));
  process.exit();
});

function getSessionCount(Arr) {
  let result = 1;
  let cur = Arr[0];
  for (let i = 1; i < Arr.length; i++) {
    if (cur[1] <= Arr[i][0]) {
      cur = Arr[i];
      result += 1;
    }
  }
  return result;
}
