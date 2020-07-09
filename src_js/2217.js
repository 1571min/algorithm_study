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
  const roapArr = input.map((e) => parseInt(e));
  console.log(getMaximumWeight(roapArr));
  process.exit();
});

function getMaximumWeight(arr) {
  // [1,2,3,4,5,6]
  // 1 * 6 = > 6
  // 2 * 5 = > 10
  // 3 * 4 = > 12 => 정렬의 중간 값 => 그리디 ?
  // 4 * 3 = > 12
  // 5 * 2 = > 10

   // [4,5,11] => 중간값 반례
  // 4*3 = 12 
  // 5*2 = 10
  // 11*1 = 11 
  // 정렬? 음 ...
  arr.sort((a,b)=>a-b); // => nlogn
  let max = 0;
  for (let i = 0; i < arr.length; i++) { // => n
    if(max<arr[i]*(arr.length-i)){
      max = arr[i] * (arr.length - i);
    }
  }
  
  return max;
}