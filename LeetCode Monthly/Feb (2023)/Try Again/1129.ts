//https://leetcode.com/problems/shortest-path-with-alternating-colors


// Solution => https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/885726/javascript-typescript-solution/
type Color = 'r' | 'b'
type Graph = {
  [key: string]: {
    [key in Color]: number[]
  }
}
type Visited = {
  [key in Color]: Set<number>
}

function shortestAlternatingPaths(
  n: number,
  redEdges: number[][],
  blueEdges: number[][]
): number[] {
  const graph: Graph = {}

  for (let i = 0; i < n; i++) graph[i] = { r: [], b: [] }

  redEdges.forEach(([i, j]) => graph[i].r.push(j))
  blueEdges.forEach(([i, j]) => graph[i].b.push(j))

  const res: number[] = Array(n).fill(-1)
  const visited: Visited = {
    r: new Set<number>(),
    b: new Set<number>(),
  }

  const queue: [number, Color][] = [
    [0, 'r'],
    [0, 'b'],
  ]

  let len = 0

  while (queue.length) {
    const j = queue.length

    for (let i = 0; i < j; i++) {
      const [currValue, currColor] = queue.shift()!

      if (res[currValue] === -1) {
        res[currValue] = len
      }

      const nextValues = graph[currValue][currColor]
      const nextColor = currColor === 'b' ? 'r' : 'b'

      nextValues.forEach((nextValue) => {
        if (!visited[nextColor].has(nextValue)) {
          visited[nextColor].add(nextValue)
          queue.push([nextValue, nextColor])
        }
      })
    }
    len++
  }

  return res
}

console.log(shortestAlternatingPaths(3, [[0, 1]], [[1, 2]]))
console.log(
  shortestAlternatingPaths(
    3,
    [
      [0, 1],
      [1, 2],
    ],
    []
  )
)
