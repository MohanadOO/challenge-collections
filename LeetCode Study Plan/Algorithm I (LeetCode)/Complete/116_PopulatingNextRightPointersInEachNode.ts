//https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
//Medium

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

//https://leetcode.com/problems/populating-next-right-pointers-in-each-node/discuss/420632/JavaScript-BFS-and-DFS-Solution
//BFS
function connect1(root: Node | null): Node | null {
  if (!root) return root

  let queue = [root]

  while (queue.length !== 0) {
    let next = []
    while (queue.length !== 0) {
      let node = queue.shift()
      node.next = queue[0] || null
      if (node.left !== null) {
        next.push(node.left)
        next.push(node.right)
      }
    }
    queue = next
  }

  return root
}

//BFS
function connect2(root: Node | null): Node | null {
  if (!root) return null
  let curr = root
  let next = root.left

  while (curr && next) {
    curr.left.next = curr.right
    if (curr.next) curr.right.next = curr.next.left

    curr = curr.next
    if (!curr) {
      curr = next
      next = curr.left
    }
  }

  return root
}
