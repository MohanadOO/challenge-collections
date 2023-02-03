//https://leetcode.com/problems/zigzag-conversion/description
function convert(s: string, numRows: number): string {
  if (numRows === 1) return s

  const n = s.length
  let sections = Math.ceil((n / 2) * (numRows - 2))
  let numCols = sections * (numRows - 1)
  let matrix: string[][] = new Array(numRows)
    .fill(0)
    .map(() => new Array(numCols).fill(' '))

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = []
  }

  let currRow = 0
  let currCol = 0
  let currStringIndex = 0

  while (currStringIndex < n) {
    while (currRow < numRows && currStringIndex < n) {
      matrix[currRow][currCol] = s[currStringIndex]
      currRow++
      currStringIndex++
    }

    currRow -= 2
    currCol++

    while (currRow > 0 && currCol < numCols && currStringIndex < n) {
      matrix[currRow][currCol] = s[currStringIndex]
      currRow--
      currCol++
      currStringIndex++
    }
  }

  return matrix.map((row) => row.join('')).join('')
}

function convertShort(s: string, numRows: number): string {
  const zigzag = [...new Array(numRows).keys()]
  zigzag.push(...zigzag.slice(1, -1).reverse())

  const rows = new Array(numRows).fill('')

  ;[...s].forEach((c, i) => (rows[zigzag[i % zigzag.length]] += c))

  return rows.join('')
}

console.log(convert('HelloThere', 4))
console.log(convert('PAYPALISHIRING', 3))
