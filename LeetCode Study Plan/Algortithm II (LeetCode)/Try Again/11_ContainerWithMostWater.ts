//https://leetcode.com/problems/container-with-most-water/
//Medium

//Solution
// https://leetcode.com/problems/container-with-most-water/discuss/1069746/JS-Python-Java-C%2B%2B-or-2-Pointer-Solution-w-Visual-Explanation-or-beats-100
function maxArea(height: number[]): number {
  let ans = 0,
    i = 0,
    j = height.length - 1

  while (i < j) {
    ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i))
    if (height[i] >= height[j]) {
      j--
    } else {
      i++
    }
  }
  return ans
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([1, 1]))
