//https://leetcode.com/problems/longest-cycle-in-a-graph/

// TLE Needs improvement
function longestCycleMySol(edges: number[]): number {
  let count = -1
  const visit = new Set()

  function dfs(node: number, start: number, cycle: number) {
    if (visit.has(node) && node === start) {
      count = Math.max(cycle, count)
    }
    if (visit.has(node)) return
    visit.add(node)

    dfs(edges[node], start, ++cycle)
    visit.delete(node)
  }

  for (let i = 0; i < edges.length; i++) {
    dfs(i, i, 0)
  }
  return count
}

function longestCycle(edges: number[]): number {
  let count = -1

  const visit = new Set()

  function dfs(node: number, dist: number[]) {
    visit.add(node)
    const neighbors = edges[node]
    if (neighbors === -1) return

    if (!visit.has(neighbors)) {
      dist[neighbors] = dist[node] + 1
      dfs(neighbors, dist)
      return
    }

    if (dist[neighbors]) {
      count = Math.max(count, dist[node] - dist[neighbors] + 1)
    }
  }

  for (let i = 0; i < edges.length; i++) {
    if (!visit.has(i)) {
      const dist = []
      dist[i] = 1
      dfs(i, dist)
    }
  }
  return count
}

console.log(longestCycle([3, 3, 4, 2, 3]))
console.log(longestCycle([2, -1, 3, 1]))
console.log(longestCycle([-1, 4, -1, 2, 0, 4]))
