//https://leetcode.com/problems/merge-k-sorted-lists

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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const len = lists.length
  if (len < 1 || (!lists[0] && len === 1)) return null

  const listValues: number[] = []
  let isList = true
  while (isList) {
    isList = false
    for (let i = 0; i < len; i++) {
      if (!lists[i]) continue
      listValues.push(lists[i].val)
      lists[i] = lists[i].next
      isList = true
    }
  }

  listValues.sort((a, b) => a - b)
  if (listValues.length === 0) return null
  let merge: ListNode | null = new ListNode()
  let curr: ListNode | null = merge
  for (let i = 0; i < listValues.length; i++) {
    curr.val = listValues[i]
    if (i === listValues.length - 1) break
    curr.next = new ListNode()
    curr = curr.next
  }

  return merge
}
