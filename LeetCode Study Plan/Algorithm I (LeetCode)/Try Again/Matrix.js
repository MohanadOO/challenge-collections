//https://leetcode.com/problems/01-matrix/
//Medium

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

//Solution Link : https://leetcode.com/problems/01-matrix/discuss/1958134/Simple-JS-Solution-w-Comments
let updateMatrix = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length

  const findZeroes = () => {
    const output = [];

    for (let i = 0; i < rows; i++){
      for (let j = 0; j < cols; j++){
        const currentElement = mat[i][j]
        if (currentElement === 0) output.push([i, j, 0])
        if (currentElement === 1) mat[i][j] = Infinity
      }
    }
    return output
  }

  const directions = [[-1,0], [1,0],[0,-1],[0,1]]
  const queue = findZeroes()

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      const [row, col, path] = queue.shift()
      mat[row][col] = Math.min(mat[row][col], path)

      for (const [dx, dy] of directions) {
        const x = row + dx
        const y = col + dy

        if (x < 0 || x >= rows) continue
        if (y < 0 || y >= cols) continue
        if (mat[x][y] !== Infinity) continue

        queue.push([x, y, path + 1])
      }
    }
  } 

  return mat
}

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
)
