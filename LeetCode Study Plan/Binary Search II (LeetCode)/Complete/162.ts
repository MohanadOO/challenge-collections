function findPeakElement(nums: number[]): number {
  return findPeakElementByBinarySearch(nums)

  //Easy Solution
  return nums.indexOf(Math.max(...nums))
}

// Binary Search O(log n)
function findPeakElementByBinarySearch(nums: number[]): number {
  const search = (left: number, right: number): number => {
    if (left === right) {
      return left
    }

    const mid = left + Math.floor((right - left) / 2)

    if (nums[mid] < nums[mid + 1]) {
      return search(mid + 1, right)
    } else {
      return search(left, mid)
    }
  }

  return search(0, nums.length - 1)
}
