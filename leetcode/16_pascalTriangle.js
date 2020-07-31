/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let totalArr = [];
  let curEle = [1];
  for (let i = 0; i < numRows; i++) {
    totalArr.push(curEle);
    curEle = getPascalElement(curEle);
  }
  return totalArr;
};

function getPascalElement(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result[i - 1]) {
      result.push(arr[i - 1] + arr[i]);
    } else {
      result.push(1);
    }
  }
  result.push(1);
  return result;
}
