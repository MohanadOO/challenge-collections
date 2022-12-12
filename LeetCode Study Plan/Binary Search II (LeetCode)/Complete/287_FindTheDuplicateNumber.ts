//https://leetcode.com/problems/find-the-duplicate-number/?envType=study-plan&id=binary-search-ii

function findDuplicate(nums: number[]): number {
  //   return usingSetSolution(nums)
  //   return negativeMarkingSolution(nums)
  //   return binarySearchSolution(nums)
  return cycleDetectionSolution(nums)

  //Set Solution
  function usingSetSolution(nums: number[]) {
    const set = new Set()
    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) return nums[i]
      else set.add(nums[i])
    }
    return -1
  }

  //Negative Marking Solution
  function negativeMarkingSolution(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i] < 0 ? -nums[i] : nums[i]
      if (nums[num] < 0) return num
      nums[num] = -nums[num]
    }
    return -1
  }

  //Binary Search Solution
  function binarySearchSolution(nums: number[]): number {
    let low = 1
    let high = nums.length - 1
    let duplicate = -1

    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2)
      let count = 0

      for (let num of nums) {
        if (num <= mid) count++
        if (count > mid) break
      }

      if (count > mid) {
        duplicate = mid
        high = mid - 1
      } else low = mid + 1
    }

    return duplicate
  }

  //Tortoise and Hare Solution
  function cycleDetectionSolution(nums: number[]): number {
    let slow = nums[0]
    let fast = nums[0]

    while (true) {
      fast = nums[nums[fast]]
      slow = nums[slow]
      if (fast === slow) break
    }

    //Find The entrance
    slow = nums[0]
    while (slow !== fast) {
      slow = nums[slow]
      fast = nums[fast]
    }
    return fast
  }
}

console.log(findDuplicate([1, 3, 4, 2, 2]))
