//https://leetcode.com/problems/reshape-the-matrix/
//Easy

function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const reshape = mat.flat()
  if (r * c !== reshape.length) return mat

  const result: number[][] = []
  while (r--) {
    console.log(result.length * c)
    result.push(reshape.slice(result.length * c, result.length * c + c))
  }
  return result
}

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
)

console.log(matrixReshape([[1, 2, 3, 4]], 2, 2))
