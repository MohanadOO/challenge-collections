//https://leetcode.com/problems/01-matrix/
//Medium

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

//Solution Link : https://leetcode.com/problems/01-matrix/discuss/1958134/Simple-JS-Solution-w-Comments
// let updateMatrix = function (mat) {
//   const rows = mat.length;
//   const cols = mat[0].length

//   const findZeroes = () => {
//     const output = [];

//     for (let i = 0; i < rows; i++){
//       for (let j = 0; j < cols; j++){
//         const currentElement = mat[i][j]
//         if (currentElement === 0) output.push([i, j, 0])
//         if (currentElement === 1) mat[i][j] = Infinity
//       }
//     }
//     return output
//   }

//   const directions = [[-1,0], [1,0],[0,-1],[0,1]]
//   const queue = findZeroes()

//   while (queue.length) {
//     for (let i = 0; i < queue.length; i++) {
//       const [row, col, path] = queue.shift()
//       mat[row][col] = Math.min(mat[row][col], path)

//       for (const [dx, dy] of directions) {
//         const x = row + dx
//         const y = col + dy

//         if (x < 0 || x >= rows) continue
//         if (y < 0 || y >= cols) continue
//         if (mat[x][y] !== Infinity) continue

//         queue.push([x, y, path + 1])
//       }
//     }
//   }

//   return mat
// }

function updateMatrix1(mat: number[][]): number[][] {
  let rows = mat.length
  let cols = mat[0].length
  let queue: number[][] = []

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 0) queue.push([i, j, 0])
      else mat[i][j] = Infinity
    }
  }

  let dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]

  while (queue.length) {
    let pos = queue.shift()

    if (mat[pos[0]][pos[1]] > pos[2]) {
      mat[pos[0]][pos[1]] = pos[2]
    }

    dir.forEach((d) => {
      let next = [pos[0] + d[0], pos[1] + d[1], pos[2] + 1]

      if (
        next[0] >= 0 &&
        next[0] < mat.length &&
        next[1] >= 0 &&
        next[1] < mat[0].length
      ) {
        if (mat[next[0]][next[1]] === Infinity) {
          queue.push(next)
        }
      }
    })
  }
  return mat
}

console.log(
  updateMatrix1([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
)
