//https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
//Easy

function sortByBits(arr: number[]): number[] {
  return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b)
}

function bitCount(num: number): number {
  let sum = 0
  while (num) {
    sum += num & 1
    num = num >>> 1
  }
  return sum
}

console.log((10 >>> 0).toString(2))
console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]))
