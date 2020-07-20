/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  let resultArray = [];
  let nums1Idx = 0;
  let nums2Idx = 0;

  while (nums1Idx <= m - 1 && nums2Idx <= n - 1) {
    if (nums1[nums1Idx] > nums2[nums2Idx]) {
      resultArray.push(nums2[nums2Idx++]);
    } else {
      resultArray.push(nums1[nums1Idx++]);
    }
  }
  for (let i = nums1Idx; i < m; i++) {
    resultArray.push(nums1[nums1Idx++]);
  }
  for (let i = nums2Idx; i < n; i++) {
    resultArray.push(nums2[nums2Idx++]);
  }
  console.log(resultArray);
  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = resultArray[i];
  }
  console.log(nums1);
};

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3;
(nums2 = [2, 5, 6]), (n = 3);
merge(nums1, m, nums2, n);
console.log(nums1);
