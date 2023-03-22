//https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/

function minScore(n: number, roads: number[][]): number {
  const graph: number[][][] = new Array(n + 1).fill(0).map(() => [])
  const visited: Set<number> = new Set([])

  for (const [v1, v2, distance] of roads) {
    graph[v1].push([v2, distance])
    graph[v2].push([v1, distance])
  }

  let min = Number.MAX_SAFE_INTEGER
  const queue = [1]
  visited.add(1)

  while (queue.length > 0) {
    const node = queue.shift() as number
    for (const [next, distance] of graph[node]) {
      min = Math.min(min, distance)
      if (visited.has(next)) continue

      visited.add(next)
      queue.push(next)
    }
  }

  return min
}

console.log(
  minScore(4, [
    [1, 2, 9],
    [2, 3, 6],
    [2, 4, 5],
    [1, 4, 7],
  ])
)

console.log(
  minScore(4, [
    [1, 2, 2],
    [1, 3, 4],
    [3, 4, 7],
  ])
)
