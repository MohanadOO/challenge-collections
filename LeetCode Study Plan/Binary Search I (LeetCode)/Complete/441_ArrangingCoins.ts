//https://leetcode.com/problems/arranging-coins/?envType=study-plan&id=binary-search-i

function arrangeCoins(n: number): number {
  return arrangeCoinsNew(n)
  return arrangeCoinsOld(n)
}

// Prev Solution
function arrangeCoinsOld(n: number): number {
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

//New Solution
// Completed Rows => 1 + 2 + ... + k = k(k + 1) / 2 (Coins)
function arrangeCoinsNew(n: number): number {
  let left = 0
  let right = n

  let total = 0

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    total = (mid * (mid + 1)) / 2

    if (total === n) return mid

    if (total > n) right = mid - 1
    else left = mid + 1
  }

  return right
}

console.log(arrangeCoins(5))
console.log(arrangeCoins(8))
