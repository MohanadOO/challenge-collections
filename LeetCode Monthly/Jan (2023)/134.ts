//https://leetcode.com/problems/gas-station/

function canCompleteCircuit(gas: number[], cost: number[]): number {
  let start = gas.length - 1
  let end = 0

  let gasTank = gas[start] - cost[start]

  while (start >= end) {
    if (gasTank >= 0) {
      gasTank += gas[end] - cost[end]
      end++
    } else {
      start--
      gasTank += gas[start] - cost[start]
    }
  }

  return gasTank >= 0 ? start : -1
}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]))
console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]))
console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6]))
