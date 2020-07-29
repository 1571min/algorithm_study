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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let leftArr = [];
  let rightArr = [];
  let resultBool = true;
  if (root) {
    if (root.left && root.right) {
      preOrderLeft(root.left, leftArr);
      preOrderRight(root.right, rightArr);

      console.log(leftArr);
      console.log(rightArr);

      for (let i = 0; i < leftArr.length; i++) {
        if (leftArr[i] !== rightArr[i]) {
          resultBool = false;
        }
      }
      return resultBool;
    } else if (root.left === root.right) {
      return true;
    } else {
      return false;
    }
  }
  return resultBool;
};

function preOrderLeft(tree, arr) {
  if (tree === null) {
    arr.push(tree);
    return;
  }
  arr.push(tree.val);
  preOrderLeft(tree.left, arr);
  preOrderLeft(tree.right, arr);
}

function preOrderRight(tree, arr) {
  if (tree === null) {
    arr.push(tree);
    return;
  }
  arr.push(tree.val);
  preOrderRight(tree.right, arr);
  preOrderRight(tree.left, arr);
}
