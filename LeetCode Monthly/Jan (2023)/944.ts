//https://leetcode.com/problems/delete-columns-to-make-sorted/

function minDeletionSize(strs: string[]): number {
  let totalDelete = 0

  for (let col = 0; col < strs[0].length; col++) {
    for (let row = 0; row < strs.length - 1; row++) {
      const curr = strs[row][col]
      const next = strs[row + 1][col]
      if (curr.charCodeAt(0) > next.charCodeAt(0)) {
        totalDelete++
        break
      }
    }
  }

  return totalDelete
}

console.log(minDeletionSize(['abc', 'bce', 'cae']))
console.log(minDeletionSize(['cba', 'daf', 'ghi']))
console.log(minDeletionSize(['a', 'b']))
console.log(minDeletionSize(['zyx', 'wvu', 'tsr']))
console.log(minDeletionSize(['rrjk', 'furt', 'guzm']))
