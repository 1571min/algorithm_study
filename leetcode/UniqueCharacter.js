/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let keys = Array.from(new Set(s.split('')));
  let countObj = keys.reduce((acc, e) => {
    acc[e] = 0;
    return acc;
  }, {});
  for (let i = 0; i < s.length; i++) {
    countObj[s[i]] += 1;
  }
  for (const key in countObj) {
    if (countObj[key] === 1) {
      return s.split('').indexOf(key);
    }
  }
  return -1;
};
