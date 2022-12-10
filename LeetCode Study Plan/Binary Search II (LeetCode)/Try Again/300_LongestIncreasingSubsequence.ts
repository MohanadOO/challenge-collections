//https://leetcode.com/problems/longest-increasing-subsequence/?envType=study-plan&id=binary-search-ii

//Solution => https://leetcode.com/problems/longest-increasing-subsequence/solutions/326122/clean-javascript-solution-dp-bs/?envType=study-plan&id=binary-search-ii&languageTags=javascript
function lengthOfLIS(nums: number[]): number {
  if (nums === null || nums.length === 0) return 0
  if (nums.length === 1) return 1

  let dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER)
  let len = 0

  nums.forEach((num, index) => {
    let i = bs(dp, num, index)
    dp[i] = num
    if (i === len) len += 1
  })

  return len
}

function bs(arr: number[], target: number, e: number) {
  let s = 0
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2)
    if (target === arr[mid]) return mid
    if (arr[mid] < target) s = mid + 1
    else e = mid - 1
  }

  return s
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]))
console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]))
console.log(lengthOfLIS([10, 9, 2, 5, 3, 4]))
