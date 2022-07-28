//https://leetcode.com/problems/triangle/
//Medium

function minimumTotal(triangle: number[][]): number {
  let rowPosition = 0
  let minimum = triangle[0][rowPosition]

  for (let i = 1; i < triangle.length; i++) {
    for (let j = rowPosition; j < triangle[i].length; j++) {
      if (triangle[i][j] > triangle[i][j + 1]) {
        minimum += triangle[i][j + 1]
        rowPosition++
        break
      } else {
        minimum += triangle[i][j]
        break
      }
    }
  }

  return minimum
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]))
