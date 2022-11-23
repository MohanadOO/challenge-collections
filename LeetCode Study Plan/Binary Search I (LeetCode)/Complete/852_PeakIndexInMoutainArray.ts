//https://leetcode.com/problems/peak-index-in-a-mountain-array/description/?envType=study-plan&id=binary-search-i

//Iteration O(n)
function peakIndexInMountainArray(arr: number[]): number {
  //   return peakIndexInMountainArrayIteration(arr)
  return peakIndexInMountainArrayBinarySearch(arr)
}

function peakIndexInMountainArrayIteration(arr: number[]): number {
  let index = 0
  let currentBig: number = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (currentBig < arr[i]) {
      index = i
      currentBig = arr[i]
    }
  }

  return index
}

//Binary Search Method O(log n)
function peakIndexInMountainArrayBinarySearch(arr: number[]): number {
  let lo = 0
  let hi = arr.length

  while (lo <= hi) {
    const middle = Math.floor((lo + hi) / 2)
    if (arr[middle] < arr[middle + 1]) lo = middle + 1
    else hi = middle - 1
  }

  return lo
}

console.log(peakIndexInMountainArray([0, 1, 0]))
console.log(peakIndexInMountainArray([0, 2, 1, 0]))
console.log(peakIndexInMountainArray([0, 10, 5, 2]))
