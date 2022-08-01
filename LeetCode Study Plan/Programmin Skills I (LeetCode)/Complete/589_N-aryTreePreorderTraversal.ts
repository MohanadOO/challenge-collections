//https://leetcode.com/problems/n-ary-tree-preorder-traversal/
//Easy

/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
  return recursivePreorder(root)
  return iterativePreorder(root)
}

function recursivePreorder(root: Node | null): number[] {
  const results = []

  const traverse = (node) => {
    if (!node) return

    results.push(node.val)
    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i])
    }
  }

  traverse(root)

  return results
}

function iterativePreorder(root: Node | null): number[] {
  const stack = []
  const results = []
  if (!root) return results

  stack.push(root)
  while(stack.length){
    const node = stack.pop()
    results.push(node.val)

    for(let i = node.children.length - 1; i >=0; i--){
        stack.push(node.children[i])
    }
  }
  return results
}

console.log(preorder([1, null, 3, 2, 4, null, 5, 6]))
