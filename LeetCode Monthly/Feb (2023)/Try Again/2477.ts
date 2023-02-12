//https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital



function minimumFuelCost(roads: number[][], seats: number): number {
  const adjList: number[][] = new Array(roads.length + 1).fill('').map(() => [])

  // Add the edges to the adjacency list
  for (const edge of roads) {
    const [node1, node2] = edge
    adjList[node1].push(node2)
    adjList[node2].push(node1)
  }

  let total = 0
  function dfs(curNode: number, preNode: number) {
    let people = 1
    for (let adj of adjList[curNode]) {
      if (adj !== preNode) people += dfs(adj, curNode)
    }

    if (curNode) total += Math.ceil(people / seats)
    return people
  }

  dfs(0, -1)
  return total
}

console.log(
  minimumFuelCost(
    [
      [0, 1],
      [0, 2],
      [0, 3],
    ],
    5
  )
)
// console.log(
//   minimumFuelCost(
//     [
//       [3, 1],
//       [3, 2],
//       [1, 0],
//       [0, 4],
//       [0, 5],
//       [4, 6],
//     ],
//     2
//   )
// )
