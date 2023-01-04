//https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/

function minimumRounds(tasks: number[]): number {
  tasks.sort((a, b) => a - b)

  let startDiff = tasks[0]
  let countDiffTasks = 1
  let rounds = 0

  for (let i = 1; i <= tasks.length; i++) {
    if (startDiff === tasks[i]) {
      countDiffTasks++
      if (countDiffTasks % 3 === 0) rounds++
    } else {
      if (countDiffTasks % 3 >= 1 && countDiffTasks > 1) rounds++
      else if (countDiffTasks % 3 === 1 && countDiffTasks <= 5) return -1
      countDiffTasks = 1
      startDiff = tasks[i]
    }
  }

  return rounds
}

console.log(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]))
console.log(minimumRounds([3, 3, 3, 3, 3, 3, 3]))
console.log(minimumRounds([9, 9, 9, 11, 11, 22, 22, 22, 22, 55, 55]))
