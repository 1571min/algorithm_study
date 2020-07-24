/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  if (typeof s !== 'string') {
    return null;
  }

  let romanNumeralArr = s.split('');
  let result = 0;

  for (var i = 0; i < romanNumeralArr.length - 1; i++) {
    if (
      DIGIT_VALUES[romanNumeralArr[i]] >= DIGIT_VALUES[romanNumeralArr[i + 1]]
    ) {
      result += DIGIT_VALUES[romanNumeralArr[i]];
    } else {
      result -= DIGIT_VALUES[romanNumeralArr[i]];
    }
  }
  if (DIGIT_VALUES[romanNumeralArr[i]]) {
    result += DIGIT_VALUES[romanNumeralArr[i]];
  }
  return result;
};
