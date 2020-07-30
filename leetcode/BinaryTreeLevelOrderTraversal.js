/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let resultArr = [];
  if (root) {
    function bfs(root, count) {
      //this.value를 count를 세어서 push
      resultArr[count]
        ? resultArr[count].push(root.val)
        : (resultArr[count] = [root.val]);
      if (root.left) bfs(root.left, count + 1);
      if (root.right) bfs(root.right, count + 1);
    }
    bfs(root, 0);
  }
  return resultArr;
};
