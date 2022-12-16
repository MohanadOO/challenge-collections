//https://leetcode.com/problems/h-index-ii/?envType=study-plan&id=binary-search-ii

function hIndex(citations: number[]): number {
  const len = citations.length
  let left = 0
  let right = len - 1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (citations[mid] >= len - mid) right = mid - 1
    else left = mid + 1
  }

  return len - left
}

console.log(hIndex([0, 1, 3, 5, 6]))
console.log(hIndex([3, 3, 5, 8, 25]))
console.log(hIndex([1, 2, 100]))
console.log(hIndex([0]))
console.log(hIndex([0, 0]))
console.log(hIndex([100]))
