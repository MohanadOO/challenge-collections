//https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/
//Easy

function findRotation(mat: number[][], target: number[][]): boolean {
  let length = mat.length - 1
  let none = true,
    one = true,
    twice = true,
    thrice = true

  return mat.every((row, i) => {
    return row.every((cell, j) => {
      if (cell !== target[i][j]) none = false
      if (cell !== target[j][length - i]) one = false
      if (cell !== target[length - i][length - j]) twice = false
      if (cell !== target[length - j][i]) thrice = false
      return none || one || twice || thrice
    })
  })
}

//Rotation 4 Maximum
const mat = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
]
const target = [
  [1, 1, 1],
  [0, 1, 0],
  [0, 0, 0],
]
console.log(findRotation(mat, target))
