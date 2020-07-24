var singleNumber = function (nums) {
  let countObj = {};
  nums.forEach((e) => (countObj[e] ? (countObj[e] += 1) : (countObj[e] = 1)));
  for (const key in countObj) {
    if (countObj[key] === 1) {
      return key;
    }
  }
};
