//https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/?envType=study-plan&id=binary-search-ii

function maxSideLength(mat: number[][], threshold: number): number {
  // return maxSideLengthBinarySearch(mat, threshold)
  return maxSideLengthBinarySearch2(mat, threshold)
  return maxSideLengthRecursion(mat, threshold)
}

function maxSideLengthRecursion(mat: number[][], threshold: number): number {
  let max = 0

  for (let i = 0; i < mat[0].length; i++) {
    if (mat[0][i] <= threshold) {
      max = Math.max(max, findMax(mat, max, i, threshold))
    }
  }

  function findMax(
    mat: number[][],
    max: number,
    index: number,
    threshold: number,
    square: number = 1,
    sum: number = 0
  ): number {
    if (square > mat.length - 1) return (max = Math.max(max, square - 1))
    if (square > mat[0].length - 1) return (max = Math.max(max, square - 1))

    for (let i = index; i < square; i++) {
      if (sum > threshold) break
      if (square > mat.length - 1) break

      for (let j = index; j < square; j++) {
        if (square > mat[0].length - 1) break
        if (sum > threshold) break
        sum += mat[i][j]
      }
    }

    if (sum > threshold) return (max = Math.max(max, square - 1))
    if (!mat[index + 1] || !mat[index - 1]) return (max = Math.max(max, square))

    const searchRight = findMax(mat, max, index + 1, threshold, square++, sum)
    const searchLeft = findMax(mat, max, index - 1, threshold, square++, sum)

    return Math.max(searchLeft, searchRight)
  }

  return max
}

// Attempt #1
function maxSideLengthBinarySearch(mat: number[][], threshold: number): number {
  const rows = mat.length
  const cols = mat[0].length
  const maxSquare = Math.min(rows, cols)

  const sort = mat.flat().sort((a, b) => a - b)
  let start = 0
  let end = sort.length
  let mid = 0

  while (start <= end) {
    mid = start + Math.floor((end - start) / 2)

    const midArr = sort.slice(0, mid)
    const sum = midArr.reduce((a, b) => a + b, midArr[0])
    if (sum >= threshold && start !== end) end = mid - 1
    else start = mid + 1
  }

  let max = 0

  for (let i = 1; i <= maxSquare; i++) {
    if (Math.pow(i, 2) <= start) max = i
  }
  if (max === 1 && sort[mid] > threshold) return 0
  return max
}

//Solution => https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/452677/javascript-time-o-nlogm-space-o-1/?envType=study-plan&id=binary-search-ii&languageTags=javascript
function maxSideLengthBinarySearch2(
  mat: number[][],
  threshold: number
): number {
  const update = storeUpdateMatrix(mat)
  const getLength = storeLengthMatrix(mat, threshold)

  const max = Math.min(mat.length, mat[0].length)
  let minLen = 0

  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[row].length; col++) {
      update(row, col)
      const maxLen = Math.min(Math.min(row, col) + 1, max)
      minLen = getLength(row, col, minLen, maxLen)
    }
  }
  return minLen

  function storeUpdateMatrix(mat: number[][]) {
    const update = (row: number, col: number) => {
      if (row) mat[row][col] += mat[row - 1][col]
      if (col) mat[row][col] += mat[row][col - 1]
      if (row && col) mat[row][col] -= mat[row - 1][col - 1]
    }
    return update
  }

  function storeLengthMatrix(mat: number[][], threshold: number) {
    const getLength = (row: number, col: number, min: number, max: number) => {
      while (min < max) {
        const len = Math.ceil((min + max) / 2)
        const up = row - len
        const left = col - len
        let sum = mat[row][col]
        if (up >= 0) sum -= mat[up][col]
        if (left >= 0) {
          sum -= mat[row][left]
          if (up >= 0) sum += mat[up][left]
        }
        if (sum > threshold) max = len - 1
        else min = len
      }
      return min
    }
    return getLength
  }
}

console.log(
  maxSideLength(
    [
      [18, 70],
      [61, 1],
      [25, 85],
      [14, 40],
      [11, 96],
      [97, 96],
      [63, 45],
    ],
    40184
  )
)
console.log(
  maxSideLength(
    [
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
    6
  )
)
console.log(
  maxSideLength(
    [
      [1, 1, 3, 2, 4, 3, 2],
      [1, 1, 3, 2, 4, 3, 2],
      [1, 1, 3, 2, 4, 3, 2],
    ],
    4
  )
)
console.log(
  maxSideLength(
    [
      [2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2],
    ],
    1
  )
)
console.log(
  maxSideLength(
    [
      [28, 39, 98, 91, 7, 99],
      [79, 3, 17, 83, 9, 92],
      [81, 73, 42, 27, 67, 70],
      [88, 30, 73, 99, 96, 89],
      [27, 59, 0, 1, 65, 79],
      [42, 55, 48, 29, 86, 96],
    ],
    24829
  )
)
