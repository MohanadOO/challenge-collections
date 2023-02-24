// https://leetcode.com/problems/minimize-deviation-in-array/description

//Solution => https://leetcode.com/problems/minimize-deviation-in-array/solutions/975487/javascript-max-heap-solution-beats-100/

function isEven(a: number): boolean {
  return a % 2 === 0
}

function swap(nums: number[], x: number, y: number) {
  const temp = nums[x]
  nums[x] = nums[y]
  nums[y] = temp
}

function maxHeapSort(nums: number[], n: number, parent: number) {
  let left = parent * 2 + 1
  while (left < n) {
    let maxChild = left
    const right = left + 1
    if (right < n && nums[right] > nums[left]) {
      maxChild = right
    }
    if (nums[maxChild] <= nums[parent]) return
    swap(nums, parent, maxChild)
    parent = maxChild
    left = parent * 2 + 1
  }
}

function minimumDeviation(nums: number[]): number {
  const n = nums.length
  nums.forEach((val, index) => !isEven(val) && (nums[index] *= 2))
  for (let i = Math.floor((n - 1) / 2); i >= 0; i--) {
    maxHeapSort(nums, n, i)
  }

  let min = Math.min(...nums)
  let max = nums[0]
  let ans = max - min

  while (isEven(max)) {
    max /= 2
    min = Math.min(max, min)
    nums[0] = max
    maxHeapSort(nums, n, 0)
    max = nums[0]
    ans = Math.min(ans, max - min)
  }

  return ans
}

// console.log(minimumDeviation([3, 5]))
console.log(minimumDeviation([1, 2, 3, 4]))
// console.log(minimumDeviation([4, 1, 5, 20, 3]))
