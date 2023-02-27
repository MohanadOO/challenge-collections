//https://leetcode.com/problems/construct-quad-tree

/**
 * Definition for node.
 * class Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: Node | null
 *     topRight: Node | null
 *     bottomLeft: Node | null
 *     bottomRight: Node | null
 *     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *     }
 * }
 */

//Recursive Solution
function construct(grid: number[][]): Node | null {
  function isSameVal(
    grid: number[][],
    x: number,
    y: number,
    len: number
  ): boolean {
    for (let i = x; i < x + len; i++) {
      for (let j = y; j < y + len; j++) {
        if (grid[i][j] !== grid[x][y]) return false
      }
    }

    return true
  }

  function res(
    grid: number[][],
    x: number,
    y: number,
    len: number
  ): Node | null {
    if (isSameVal(grid, x, y, len)) {
      return new Node(grid[x][y] === 1, true)
    }

    const root = new Node(false, false)

    root.topLeft = res(grid, x, y, len / 2)
    root.topRight = res(grid, x, y + len / 2, len / 2)
    root.bottomLeft = res(grid, x + len / 2, y, len / 2)
    root.bottomRight = res(grid, x + len / 2, y + len / 2, len / 2)

    return root
  }

  return res(grid, 0, 0, grid.length)
}
// Optimized Recursive Solution
function constructOptimized(grid: number[][]): Node | null {
  function res(grid: number[][], x: number, y: number, len: number) {
    if (len === 1) return new Node(grid[x][y] === 1, true)

    const topLeft = res(grid, x, y, len / 2)
    const topRight = res(grid, x, y + len / 2, len / 2)
    const bottomLeft = res(grid, x + len / 2, y, len / 2)
    const bottomRight = res(grid, x + len / 2, y + len / 2, len / 2)

    if (
      topLeft.isLeaf &&
      topRight.isLeaf &&
      bottomLeft.isLeaf &&
      bottomRight.isLeaf
    ) {
      if (
        topLeft.val == topRight.val &&
        topRight.val == bottomLeft.val &&
        bottomLeft.val == bottomRight.val
      ) {
        return new Node(topLeft.val, true)
      }
    }
    return new Node(false, false, topLeft, topRight, bottomLeft, bottomRight)
  }

  return res(grid, 0, 0, grid.length)
}

console.log(
  construct([
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
  ])
)
console.log(
  construct([
    [0, 1],
    [1, 0],
  ])
)
