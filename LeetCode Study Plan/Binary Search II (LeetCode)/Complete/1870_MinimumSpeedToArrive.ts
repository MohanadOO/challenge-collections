//https://leetcode.com/problems/minimum-speed-to-arrive-on-time/?envType=study-plan&id=binary-search-ii

/*
    Explanation:
        - Given a floating point number (hour) representing the amount of time needed to reach the office.
        - To reach your office you need to take (n) trains in sequential order.
        - You are given an integer array (dist) of length (n), where (dist[i]) describes the distances of the ith train ride.
        - Each train depart at an integer hour so you have to wait between train rides if needed => ex: If arrived at 2.3 hours to depart the next train you need to wait until 3 hours.
        - Return the minimum positive integer speed (in KM/H). -1 If it's impossible.
    
    Solution:
        - Using Binary Search we can search for the minimum positive integer by having the LOW value starting at 1 and the maximum value is the 99999999.
        - After having the middle value and calculating the trip each train trip (dist[i] / middle) if the total hours is higher than the time needed to reach the office we search for higher middle value by:
          * LOW => Middle + 1. 
          * Else HIGH => Middle -1
*/

function minSpeedOnTime(dist: number[], hour: number): number {
  let minimum = -1
  
  let low = 0
  let high = 99999999

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2)
    let sum = 0

    for (let i = 0; i < dist.length; i++) {
      let total = (dist[i] / mid)
      if (!Number.isInteger(total)) sum = Math.ceil(sum)
      sum += total
    }

    if (sum === hour) return mid
    if (sum > hour) low = mid + 1
    else {
      high = mid - 1
      minimum = mid
    }
  }

  return minimum
}

console.log(minSpeedOnTime([1, 3, 2], 6))
console.log(minSpeedOnTime([1, 3, 2], 2.7))
console.log(minSpeedOnTime([1, 3, 2], 1.9))
console.log(minSpeedOnTime([1, 1, 100000], 2.01))
