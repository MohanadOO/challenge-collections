//https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/?envType=study-plan&id=binary-search-ii

//Wrong Solution
function minDaysAttempted(bloomDay: number[], m: number, k: number): number {
  if (bloomDay.length < m * k) return -1

  let arr = new Array(bloomDay.length).fill('_')
  const sort = [...bloomDay].sort((a, b) => a - b)

  for (let i = 0; i < bloomDay.length; i++) {
    const curr = sort[i]
    const index = bloomDay.indexOf(curr)

    bloomDay[index] = -bloomDay[index]
    arr[index] = '*'
    if (arr.filter((el) => el === '*').length >= m * k) {
      if (checkAdjacent(arr, m, k, 0)) return -bloomDay[index]
    }
  }

  function checkAdjacent(
    arr: string[],
    m: number,
    k: number,
    start: number
  ): boolean {
    if (m === 0) return true
    if (start >= arr.length) return false
    if (arr[start] === '_') return checkAdjacent(arr, m, k, (start = start + 1))
    for (let i = start + 1; i < k + start; i++) {
      if (arr[i] === '_') return checkAdjacent(arr, m, k, (start = start + i))
    }

    return m === 1 ? true : checkAdjacent(arr, --m, k, (start = start + k))
  }

  return -1
}

//Solution => https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/686872/javascript-binary-search/
function minDays(bloomDay: number[], m: number, k: number) {
  if (bloomDay.length < m * k) return -1
  let start = 0
  let end = Math.max(...bloomDay)
  let final = -1

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2)
    console.log(mid)
    if (checkAdjacent(bloomDay, m, k, mid)) {
      end = mid - 1
      final = mid
    } else start = mid + 1
  }

  function checkAdjacent(
    days: number[],
    m: number,
    k: number,
    mid: number
  ): boolean {
    let count = 0
    let total = 0

    for (let i = 0; i < days.length; i++) {
      if (days[i] <= mid) {
        count++
        if (count === k) {
          total++
          count = 0
        }
      } else count = 0
    }
    return total >= m
  }

  return final
}

console.log(minDays([1, 10, 3, 10, 2], 3, 1))
// console.log(minDays([1, 10, 3, 10, 2], 3, 2))
// console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3))
// console.log(minDays([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 4, 2))
