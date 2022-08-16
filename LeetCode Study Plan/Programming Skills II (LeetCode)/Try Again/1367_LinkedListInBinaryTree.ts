//https://leetcode.com/problems/linked-list-in-binary-tree/
//Medium

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

let storeList = []
function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
  storeToList(head, root)

  for (let i = 0; i < storeList.length; i++) {
    if (subPath(head, storeList[i])) return true
  }

  return false
}

function storeToList(head: ListNode | null, root: TreeNode | null): void {
  if (head === null || root === null) return
  if (head.val === root.val) storeList.push(root)
  storeToList(head, root.left)
  storeToList(head, root.right)
}

function subPath(head: ListNode | null, node: TreeNode | null) {
  if (head === null) return true
  if (node === null) return false

  if (head.val === node.val) {
    return subPath(head.next, node.left) || subPath(head.next, node.right)
  }
  return false
}

//Easy Solution 👇
//Solution => https://leetcode.com/problems/linked-list-in-binary-tree/discuss/2378283/Beginner-friendly-JavaJavaScrpitPython-solution
function isSubPath1(head: ListNode | null, root: TreeNode | null): boolean {
  if (!root) return false
  if (checkIsSame(head, root)) return true

  return isSubPath1(head, root.left) || isSubPath1(head, root.right)
}

function checkIsSame(head: ListNode | null, node: TreeNode | null) {
  if (!head) return true
  if (!node) return false
  if (head.val !== node.val) return false

  return checkIsSame(head.next, node.left) || checkIsSame(head.next, node.right)
}
