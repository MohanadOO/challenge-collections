//https://leetcode.com/problems/copy-list-with-random-pointer/?envType=study-plan&id=programming-skills-ii
//Medium

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
  const map = new Map()
  
  function copy(node: Node | null): Node | null {
    if (!node) return null
    if (map.get(node)) return map.get(node)

    const n = new Node(node.val)
    map.set(node, n)
    n.next = copy(node.next)
    n.random = copy(node.random)
    
    return n
  }

  return copy(head)
}

console.log(
  copyRandomList([
    [7, null],
    [13, 0],
    [11, 4],
    [10, 2],
    [1, 0],
  ])
)
