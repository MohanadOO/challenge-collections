//https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/
//Easy

function findRotation(mat: number[][], target: number[][]): boolean {
  // return findRotationUsingEvery(mat, target)
  // return findRotationUsingTransposeReverse(mat,target)
  return findRotationsOnePass(mat, target)
}

function findRotationUsingEvery(mat: number[][], target: number[][]): boolean {
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

function findRotationUsingTransposeReverse(
  mat: number[][],
  target: number[][]
): boolean {
  const len = mat.length
  let rotation = 3

  while (rotation--) {
    if (matchTarget(mat, target)) return true
    rotate(mat)
  }

  function matchTarget(mat: number[][], target: number[][]): boolean {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (mat[i][j] !== target[i][j]) return false
      }
    }
    return true
  }

  function rotate(mat: number[][]) {
    //Transpose the Matrix (Rows becomes Columns)
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const row = mat[i][j]
        const column = mat[j][i]
        mat[i][j] = column
        mat[j][i] = row
      }
    }
    //Reverse rows
    for (let i = 0; i < len / 2; i++) {
      for (let j = 0; j < len; j++) {
        const temp = mat[i][j]
        mat[i][j] = mat[len - 1 - i][j]
        mat[len - 1 - i][j] = temp
      }
    }
  }

  return false
}

function findRotationsOnePass(mat:number[][], target: number[][]): boolean {
  const len = mat.length - 1
  let none = true, once = true, twice = true, thrice = true
  for (let i = 0; i <= len; i++){
    for (let j = 0; j <= len; j++){
      if (mat[i][j] !== target[i][j]) none = false
      if (mat[i][j] !== target[j][len - i]) once = false
      if (mat[i][j] !== target[len - i][len - j]) twice = false
      if (mat[i][j] !== target[len - j][i]) thrice = false
    }
    if (!none && !once && !twice && !thrice) return false
  }
  return none || once || twice || thrice
}

//Rotation 4 Maximum
const mat = [
  [0, 0, 1],
  [0, 1, 1],
  [0, 0, 1],
]
const target = [
  [1, 1, 1],
  [0, 1, 0],
  [0, 0, 0],
]
console.log(findRotation(mat, target))
