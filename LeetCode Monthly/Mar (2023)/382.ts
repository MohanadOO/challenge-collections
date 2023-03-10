//https://leetcode.com/problems/linked-list-random-node/

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

class Solution {
  private head: ListNode | null
  private size: number

  constructor(head: ListNode | null) {
    this.head = head
    this.size = head === null ? 0 : 1

    let temp = head
    while (temp.next) {
      temp = temp.next
      this.size++
    }
  }

  getRandom(): number {
    if (!this.head) return -1

    let getRandom: ListNode = this.head
    const random = Math.floor(Math.random() * this.size)

    for (let i = 0; i < random; i++) {
      getRandom = getRandom.next
    }

    return getRandom.val
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
let obj = new Solution(head)
console.log(obj.getRandom())
