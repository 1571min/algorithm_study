// [2,1,1,2]

function rob(nums) {
  //재귀를 이용
  // 탈출 조건 인덱스가 nums길이보다 클 때
  // 반복 호출
  // 해당 인덱스의 다음 칸 부터 호출

  // 반복문 이용
  let resultA = nums[0];
  let resultB = nums[1] ? nums[1] : 0;
  resultA = getMaximum(nums, 0, resultA);
  resultB = getMaximum(nums, 1, resultB);
  return resultA > resultB ? resultA : resultB;
}

// [1,2,3,4,5]
// 1+3
// 1+4
function getMaximum(nums, idx, result) {
  while (idx < nums.length) {
    if (nums[idx + 3]) {
      if (nums[idx + 2]) {
        if (nums[idx + 2] + nums[idx] >= nums[idx + 3] + nums[idx]) {
          result += nums[idx + 2];
          idx += 2;
        } else {
          result += nums[idx + 3];
          idx += 3;
        }
      } else {
        break;
      }
    } else {
      if (nums[idx + 2]) {
        result += nums[idx + 2];
        idx += 2;
      }
      break;
    }
  }
  return result;
}

console.log(rob([2, 4, 8, 9, 9, 3]));
