/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let xorResult = x ^ y;
  let bitStr = Number(xorResult).toString(2);// 1010
  let count = 0;
  for (let i = 0; i < bitStr.length; i++) {
    if (bitStr[i] === '1') {
      count += 1;
    }
  }
  return count;
};
