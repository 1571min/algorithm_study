/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let stack = [];
  let queue = [];
  if (head === null) return true;
  while (head !== null) {
    stack.push(head.val);
    queue.push(head.val);
    head = head.next;
  }
  let size = queue.length;
  while (queue.length) {
    if (stack[stack.length - 1] !== queue[0]) {
      return false;
    }
    stack.pop();
    queue.shift();
    if (queue.length < (size - 1) / 2) break;
  }
  return true;
};
