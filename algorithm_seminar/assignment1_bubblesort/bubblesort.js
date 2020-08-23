const fs = require('fs');
let inputJSON = fs.readFileSync('input_a.json');
let inputArr = JSON.parse(inputJSON);
// let input = Array.from(Array(400000).keys()).reverse();
function bubbleSort(arr, n) {
    for (let i = 0; i < n-1; i++) {
        bubble(arr, i, n);
    }
}
function bubble(arr, i, n) {
    for (let j = n-1; j > i; j--) {
        if(arr[j]<arr[j-1]){
            let temp = arr[j];
            arr[j]= arr[j-1];
            arr[j-1] = temp;
        }
    }
}
let beforeTimestamp = new Date().getTime();
bubbleSort(inputArr,inputArr.length);
let afterTimestamp = new Date().getTime();
console.log('소요 시간 ',afterTimestamp-beforeTimestamp);
//input a => 812997ms