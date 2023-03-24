//https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/

// Solution => https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/3334307/javascript-detailed-explanation/
function minReorder(n: number, connections: number[][]): number {
  const from: Map<number, number[]> = new Map()
  const to: Map<number, number[]> = new Map()

  function insert(map: Map<number, number[]>, key: number, value: number) {
    if (!map.has(key)) return map.set(key, [value])
    const arr = [...(map.get(key) as number[]), value]
    map.set(key, arr)
  }

  for (const [a, b] of connections) {
    insert(from, a, b)
    insert(to, b, a)
  }
  const queue = [0]
  const visited = new Set()
  let count = 0

  while (queue.length) {
    const cur = queue.shift() as number
    if (from.has(cur)) {
      for (const x of from.get(cur) as number[]) {
        if (visited.has(x)) continue
        queue.push(x)
        count++
      }
    }

    if (to.has(cur)) {
      for (const x of to.get(cur) as number[]) {
        if (visited.has(x)) continue
        queue.push(x)
      }
    }

    visited.add(cur)
  }

  return count
}

function minReorder2(n: number, connections: number[][]): number {
  const graph: number[][] = new Array(n).fill(0).map((arr) => [])
  const set = new Set()
  for (const [a, b] of connections) {
    graph[a].push(b)
    graph[b].push(a)
    set.add(`${a}:${b}`)
  }

  let count = 0
  dfs(0, -1)

  function dfs(node: number, parent: number) {
    if (set.has(`${parent}:${node}`)) count++
    for (const nei of graph[node]) {
      if (nei === parent) continue
      dfs(nei, node)
    }
  }

  return count
}

console.log(
  minReorder2(6, [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ])
)
console.log(
  minReorder2(5, [
    [1, 0],
    [1, 2],
    [3, 2],
    [3, 4],
  ])
)
console.log(
  minReorder2(3, [
    [1, 0],
    [2, 0],
  ])
)
