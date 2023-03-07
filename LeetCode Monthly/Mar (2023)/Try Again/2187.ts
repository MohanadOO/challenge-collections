//https://leetcode.com/problems/minimum-time-to-complete-trips/

function minimumTime(time: number[], totalTrips: number): number {
  let left = 1
  let right = totalTrips * Math.max(...time)

  function timeEnough(mid: number): boolean {
    let trips = 0

    for (const t of time) {
      trips += Math.floor(mid / t)
    }

    return trips >= totalTrips
  }

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)

    if (timeEnough(mid)) right = mid
    else left = mid + 1
  }

  return left
}

console.log(minimumTime([1, 2, 3, 5, 1, 2, 3, 7], 30))
console.log(minimumTime([2], 1))
console.log(minimumTime([2], 2))
