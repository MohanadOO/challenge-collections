//https://leetcode.com/problems/binary-search-tree-iterator/?envType=study-plan&id=programming-skills-ii
//Medium

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

//Solution By => https://leetcode.com/problems/binary-search-tree-iterator/solutions/775226/javascript-clean-stack-solution/?envType=study-plan&id=programming-skills-ii&orderBy=most_votes&languageTags=javascript
class BSTIterator {
  private root
  private stack

  constructor(root: TreeNode | null) {
    this.root = root
    this.stack = []
  }

  next(): number {
    while (this.root) {
      this.stack.push(this.root)
      this.root = this.root.left
    }
    const res = this.stack.pop()
    this.root = res.right
    return res.val
  }

  hasNext(): boolean {
    return this.root || this.stack.length
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const obj = new BSTIterator([7, 3, 15, null, null, 9, 20])
const param_1 = obj.next()
const param_3 = obj.hasNext()
// const param_2 = obj.next()
console.log(obj)
