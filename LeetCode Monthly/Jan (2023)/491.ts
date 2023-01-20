//https://leetcode.com/problems/non-decreasing-subsequences/description

function findSubsequences(nums: number[]): number[][] {
  let res: number[][] = []
  let map = {}

  function iterate(index: number, temp: number[]) {
    const mapIndex = temp.toString()
    if (map[mapIndex]) return
    if (temp.length >= 2) res.push(temp)

    for (let i = index; i < nums.length; i++) {
      if (temp[temp.length - 1] > nums[i]) continue
      map[mapIndex] = true
      iterate(i + 1, [...temp, nums[i]])
    }
  }

  iterate(0, [])
  return res
}

console.log(findSubsequences([4, 6, 7, 7]))
