/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let result = '1';
  for (let i = 1; i < n; i++) {
    result = countNum(result);
  }
  return result;
};

function countNum(str) {
  let result = '';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count += 1;
    if (str[i] !== str[i + 1]) {
      result += '' + count + str[i];
      count = 0;
    }
  }
  return result;
}
