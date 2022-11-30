//https://leetcode.com/problems/check-if-n-and-its-double-exist/?envType=study-plan&id=binary-search-i

function checkIfExist(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue
      if (arr[i] === 2 * arr[j]) return true
    }
  }
  return false
}

console.log(checkIfExist([10, 2, 5, 3]))
console.log(checkIfExist([7, 1, 14, 11]))
