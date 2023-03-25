//https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph

function countPairs(n: number, edges: number[][]): number {
  const adj: number[][] = new Array(n).fill([]).map(() => [])

  for (const edge of edges) {
    adj[edge[0]].push(edge[1])
    adj[edge[1]].push(edge[0])
  }

  let numberOfPairs = 0
  let sizeOfComponents = 0
  let remainingNodes = n
  const visit: Set<number> = new Set()

  for (let i = 0; i < n; i++) {
    if (visit.has(i)) continue

    sizeOfComponents = dfs(i, adj, visit)
    numberOfPairs += sizeOfComponents * (remainingNodes - sizeOfComponents)
    remainingNodes -= sizeOfComponents
  }

  function dfs(node: number, adj: number[][], visit: Set<number>): number {
    let count = 1
    visit.add(node)
    for (const nei of adj[node]) {
      if (!visit.has(nei)) {
        count += dfs(nei, adj, visit)
      }
    }
    return count
  }

  return numberOfPairs
}

// console.log(
//   countPairs(3, [
//     [0, 1],
//     [0, 2],
//     [1, 2],
//   ])
// )
console.log(
  countPairs(7, [
    [0, 2],
    [0, 5],
    [2, 4],
    [1, 6],
    [5, 4],
  ])
)
