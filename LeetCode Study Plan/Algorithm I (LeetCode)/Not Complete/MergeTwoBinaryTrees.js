//https://leetcode.com/problems/merge-two-binary-trees/
//Easy

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

class Node {
  constructor(data = 0, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BST {
  constructor() {
    this.root = null
  }

  //   addLeft(data) {
  //     const node = this.root
  //     if (node === null) {
  //       this.root = new Node(data)
  //       return
  //     } else {
  //       const searchTree = (node) => {
  //         if (node.left === null) {
  //           node.left = new Node(data)
  //           return
  //         } else if (node.left !== null) {
  //           return searchTree(node.left)
  //         }
  //         if (node.right === null) {
  //           node.right = new Node(data)
  //           return
  //         } else if (node.right !== null) {
  //           return searchTree(node.right)
  //         } else {
  //           return null
  //         }
  //       }
  //       return searchTree(node)
  //     }
  //   }

  addLeft(data) {
    const node = this.root
    const searchTree = (node) => {
      if (node.left !== null) {
        return searchTree(node.left)
      } else if (node.left === null) {
        node.left = new Node(data)
      }
    }
    return searchTree(node)
  }

  addRight(data) {
    const node = this.root
    if (node === null) {
      this.root = new Node(data)
    } else {
      const searchTree = (node) => {
        if (node.right !== null) {
          return searchTree(node.right)
        } else if (node.right === null) {
          node.right = new Node(data)
        }
      }
      return searchTree(node)
    }
  }

  merge(tree) {
    const orgTree = this.root
    const secTree = tree.root

    const searchTree = (orgTree, secTree) => {
      if (orgTree.data !== null && secTree.data !== null) {
        orgTree.data = orgTree.data + secTree.data

        if (orgTree.left === null) {
          orgTree.left = secTree.left
          if (orgTree.left !== null && secTree.left !== null) {
            return searchTree(orgTree.left, secTree.left)
          }
        } else if (orgTree.right === null) {
          orgTree.right = secTree.right
          if (orgTree.right !== null && secTree.right !== null) {
            return searchTree(orgTree.right, secTree.right)
          }
        }
      } else {
        return null
      }
    }
    searchTree(orgTree, secTree)
    console.log(orgTree)
    return orgTree
  }
}

let mergeTrees = function (root1, root2) {
  const root1Node = new BST()
  const root2Node = new BST()

  root1.forEach((value, index) => {
    if (index % 2 == 1) {
      root1Node.addLeft(value)
    } else {
      root1Node.addRight(value)
    }
  })
  root2.forEach((value, index) => {
    if (index % 2 == 1) {
      root2Node.addLeft(value)
    } else {
      root2Node.addRight(value)
    }
  })

  console.log(root1Node)
  console.log(root2Node)

  const merge = root1Node.merge(root2Node)
  return merge
}

console.log(mergeTrees([1, 3, 2, 5], [2, 1, 3, null, 4, null, 7]))
// console.log(mergeTrees([1, 2, 3], [5, 3, 2, 6, 1, 4]))
