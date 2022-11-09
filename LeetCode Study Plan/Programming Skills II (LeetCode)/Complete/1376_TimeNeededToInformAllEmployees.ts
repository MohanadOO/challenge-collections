//https://leetcode.com/problems/time-needed-to-inform-all-employees/
//Medium

function numOfMinutes(
  n: number,
  headID: number,
  manager: number[],
  informTime: number[]
): number {
  manager.forEach((_, index) => calculateTime(index))
  return Math.max(...informTime)

  function calculateTime(id: number): number {
    if (manager[id] !== -1) {
      informTime[id] += calculateTime(manager[id])
      manager[id] = -1
    }
    return informTime[id]
  }
}

console.log(numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0]))
