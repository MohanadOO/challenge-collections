//https://leetcode.com/problems/merge-two-sorted-lists/
//Easy

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//https://leetcode.com/problems/merge-two-sorted-lists/discuss/2315508/Javascript-solution-or-Easy
let mergeTwoLists = function (list1, list2) {
  if (list1 == null) return list2
  if (list2 == null) return list1 // 4

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2) // 1 -> 2 -> 4
    return list1 // 1, 2
  } else {
    list2.next = mergeTwoLists(list1, list2.next) // 1 -> 3 -> 4 -> null
    return list2 // 1, 3, 4
  }
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))
