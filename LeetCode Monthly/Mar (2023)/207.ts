//https://leetcode.com/problems/course-schedule

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const adj: number[][] = new Array(numCourses).fill(0).map(() => [])
  const visit = new Set()

  for (const course of prerequisites) {
    adj[course[0]].push(course[1])
  }

  function dfs(course: number): boolean {
    if (visit.has(course)) return false
    if (adj[course].length === 0) return true

    visit.add(course)
    for (const pre of adj[course]) {
      if (!dfs(pre)) return false
    }
    visit.delete(course)
    adj[course] = []
    return true
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false
  }
  return true
}

console.log(canFinish(2, [[1, 0]]))
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
)
