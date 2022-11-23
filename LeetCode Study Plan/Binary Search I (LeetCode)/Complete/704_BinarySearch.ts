//https://leetcode.com/problems/binary-search/?envType=study-plan&id=binary-search-i

function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const curr = nums[middle]

    if (curr === target) return middle

    if (target > curr) left = middle + 1
    else right = middle - 1
  }

  return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([-1, 0, 3, 5, 9, 12], 2))
console.log(search([-1, 0, 3, 5, 9, 12], 3))
console.log(search([-1, 0, 3, 5, 9, 12], 12))
console.log(search([-1, 0, 3, 5, 9, 12], -1))
