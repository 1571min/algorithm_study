let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function getSumTime(Arr) {
  let result = 0;
  for (let i = 0; i < Arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      result += Arr[j];
    }
  }
  return result;
}
const timeArr = input[1].split(' ').map((ele) => Number(ele));
let result = getSumTime(timeArr.sort());
console.log('' + result);