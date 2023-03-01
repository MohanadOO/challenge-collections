//https://leetcode.com/problems/sort-an-array

import bubbleSort from '../../Sorting Methods/bubbleSort'
import insertionSort from '../../Sorting Methods/insertionSort'
import mergeSort from '../../Sorting Methods/mergeSort'
import selectionSort from '../../Sorting Methods/selectionSort'

function sortArray(nums: number[]): number[] {
  // O(n^2)
//   return bubbleSort(nums)
//   return insertionSort(nums)
//   return selectionSort(nums)

  // O(n)
  return mergeSort(nums)
}

console.log(sortArray([5, 2, 3, 1]))
console.log(sortArray([5, 1, 4, 2, 8]))
console.log(sortArray([5, 1, 1, 2, 0, 0]))
