//https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/?envType=study-plan&id=binary-search-i

function kWeakestRows(mat: number[][], k: number): number[][] {
  return [kWeakestRowsBinarySearch(mat, k), kWeakestRowsSimpleSolution(mat, k)]
}

// Binary Search
function kWeakestRowsBinarySearch(mat: number[][], k: number): number[] {
  let soldiersInRow = {}

  for (let i = 0; i < mat.length; i++) {
    const row = mat[i]

    let start = 0
    let end = row.length - 1

    while (start <= end) {
      const mid = start + Math.floor((end - start) / 2)

      if (
        row[mid] === 1 &&
        (row[mid + 1] === undefined || row[mid + 1] === 0)
      ) {
        end = mid
        break
      }

      if (row[mid] === 1) start = mid + 1
      else end = mid - 1
    }

    soldiersInRow[i] = end + 1
  }
  const sortRows = Object.entries(soldiersInRow).sort((a, b): any => {
    const [indexA, soldierA] = a as [string, number]
    const [indexB, soldierB] = b as [string, number]

    if (soldierA < soldierB) return -1
    else if (soldierA > soldierB) return 1
    else 0
  })
  return sortRows.map((value) => Number(value[0])).slice(0, k)
}

//https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/496819/javascript-simple-solution/?envType=study-plan&id=binary-search-i&languageTags=javascript
function kWeakestRowsSimpleSolution(mat: number[][], k: number): number[] {
  return mat
    .map((row, index) => [index, row.filter((n) => n === 1).length])
    .sort(([i1, c1], [i2, c2]) => c1 - c2 || i1 - i2)
    .map(([index]) => index)
    .slice(0, k)
}

console.log(
  kWeakestRows(
    [
      [1, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 1, 0],
    ],
    5
  )
)
console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
)

console.log(
  kWeakestRows(
    [
      [1, 1, 0],
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    5
  )
)
