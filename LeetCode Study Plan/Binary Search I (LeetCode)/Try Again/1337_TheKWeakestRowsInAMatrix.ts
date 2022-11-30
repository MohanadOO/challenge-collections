//https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/?envType=study-plan&id=binary-search-i

function kWeakestRows(mat: number[][], k: number): number[] {
  //   return kWeakestRowsBinarySearch(mat, k)
  return kWeakestRowsSimpleSolution(mat, k)
}

// Not Complete (Binary Search)
function kWeakestRowsBinarySearch(mat: number[][], k: number): number[] {
  let weakToStrong = {}

  for (let i = 0; i < mat.length; i++) {
    let soldiers = 0
    let start = 0
    let end = mat[i].length - 1

    while (start <= end) {
      const middle = start + Math.floor((end - start) / 2)
      const curr = mat[i][middle]
      const next = mat[i][middle + 1]
      const prev = mat[i][middle - 1]

      if (curr === 0) end = middle - 1
      else if (next === undefined || next === 0) {
        soldiers = next === undefined ? end + 1 : end
        if (start === end) soldiers++
        if (end === mat[i].length - 1) soldiers = middle + 1
        start = end + 1
      } else if (prev === undefined) {
        soldiers = end + 1
        start = end + 1
      } else start = middle + 1
    }
    if (weakToStrong[soldiers] === undefined) weakToStrong[soldiers] = [i]
    else weakToStrong[soldiers].push(i)
  }

  const rows: number[] = []
  const values = Object.values(weakToStrong).flat() as number[]
  for (let z = 0; z < k; z++) {
    rows.push(values[z])
  }
  return rows
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
