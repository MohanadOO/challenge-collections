//https://leetcode.com/problems/search-in-rotated-sorted-array/?envType=study-plan&id=binary-search-i

//Solution => https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/14467/easy-to-understand-javascript-o-log-n-solution/?envType=study-plan&id=binary-search-i&languageTags=javascript
function search(nums: number[], target: number): number {
  let s = 0
  let e = nums.length - 1

  while (s <= e) {
    const mid = s + Math.floor((e - s) / 2)
    if (nums[mid] === target) return mid

    if (nums[s] > nums[e]) {
      if (nums[mid] < nums[s]) {
        if (target > nums[mid] && target < nums[s]) s = mid + 1
        else e = mid - 1
      } else {
        if (target < nums[mid] && target > nums[e]) e = mid - 1
        else s = mid + 1
      }
    } else if (nums[mid] > target) e = mid - 1
    else s = mid + 1
  }

  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 1))
console.log(search([4, 5, 6, 7, 0, 1, 2], 3))
console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
