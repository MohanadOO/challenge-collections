//https://leetcode.com/problems/number-of-operations-to-make-network-connected/

// Solution => https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/1861718/javascript-clean-union-find-w-explanation-99/
function makeConnected(n: number, connections: number[][]): number {
  const parent = Array(n).fill(-1)

  let spare = 0
  let notConnected = n - 1

  for (let [node, connection] of connections) {
    if (find(node) !== find(connection)) {
      union(node, connection)
      notConnected--
    } else spare++
  }

  function find(node: number): number {
    if (parent[node] === -1) return node
    parent[node] = find(parent[node])
    return parent[node]
  }

  function union(node1: number, node2: number): void {
    const parent1 = find(node1)
    const parent2 = find(node2)
    if (parent1 !== parent2) parent[parent2] = parent1
  }

  return notConnected <= spare ? notConnected : -1
}

console.log(
  makeConnected(4, [
    [0, 1],
    [0, 2],
    [1, 2],
  ])
)
console.log(
  makeConnected(6, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
  ])
)
console.log(
  makeConnected(6, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
  ])
)
