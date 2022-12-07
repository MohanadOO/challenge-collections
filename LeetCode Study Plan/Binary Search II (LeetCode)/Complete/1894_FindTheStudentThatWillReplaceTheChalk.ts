//https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/?envType=study-plan&id=binary-search-ii

function chalkReplacer(chalk: number[], k: number): number {
  const len = chalk.length
  k = k % chalk.reduce((a, b) => a + b)

  for (let i = 0; i < len; i++) {
    if (chalk[i] > k) return i
    k -= chalk[i]
  }
}

console.log(chalkReplacer([5, 1, 5], 22))
console.log(chalkReplacer([3, 4, 1, 2], 25))
