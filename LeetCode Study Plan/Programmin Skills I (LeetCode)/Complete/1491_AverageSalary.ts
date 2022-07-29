//https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
//Easy

function average(salary: number[]): number {
  if (salary.length <= 3) return salary.sort()[1]

  const min = Math.min(...salary)
  const max = Math.max(...salary)
  const total = salary.reduce((a, b) => {
    return a + b
  }, 0)

  return (total - min - max) / (salary.length - 2)
}

console.log(average([4000, 3000, 1000, 2000]))
console.log(average([1000, 2000, 3000]))
console.log(average([6000, 5000, 4000, 3000, 2000, 1000]))
console.log(average([3000, 6000, 1000]))
