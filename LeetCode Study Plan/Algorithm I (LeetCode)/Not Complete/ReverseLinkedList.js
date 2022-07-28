//https://leetcode.com/problems/reverse-linked-list/
//Easy

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head.next) return head

  let start = head
  let count = 0
  while (start.next) {
    start = start.next
    count++;
  }
  let reverse = head
  while(count !== 0){
    reverse = start.next
  }
}
