//https://leetcode.com/problems/arranging-coins/?envType=study-plan&id=binary-search-i

function arrangeCoins(n: number): number {
  let left = 0,
    right = n
  let middle = 0,
    curr = 0

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2)
    curr = (middle * (middle + 1)) / 2

    if (curr === n) return middle

    if (n < curr) right = middle - 1
    else left = middle + 1
  }

  return right
}

console.log(arrangeCoins(5))
console.log(arrangeCoins(8))
