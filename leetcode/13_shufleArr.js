/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.origin = [...nums];
  this.cur = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.cur = [...this.origin];
  return this.cur;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let randomPos;
  for (let i = 0; i < this.cur.length; i++) {
    randomPos = Math.floor(Math.random() * this.cur.length);
    [this.cur[i], this.cur[randomPos]] = [this.cur[randomPos], this.cur[i]];
  }
  return this.cur;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
