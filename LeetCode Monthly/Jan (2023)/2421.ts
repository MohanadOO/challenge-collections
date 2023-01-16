//https://leetcode.com/problems/number-of-good-paths/

class UnionFind {
  private parent: number[]
  private rank: number[]

  constructor(n: number) {
    this.parent = new Array(n).fill(0).map((_, i) => i)
    this.rank = new Array(n).fill(1)
  }

  find(x: number): number {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x])
    return this.parent[x]
  }

  union(a: number, b: number) {
    const [rootA, rootB] = [this.find(a), this.find(b)]
    if (rootA === rootB) return
    if (this.rank[rootA] > this.rank[rootB]) {
      this.parent[rootB] = rootA
      this.rank[rootA] += this.rank[rootB]
    } else {
      this.parent[rootA] = rootB
      this.rank[rootB] += this.rank[rootA]
    }
  }
}

function numberOfGoodPaths(vals: number[], edges: number[][]): number {
  const n = vals.length

  //Adjacency List
  const adj: number[][] = new Array(n).fill(0).map(() => [])
  for (const x of edges) {
    adj[x[0]].push(x[1])
    adj[x[1]].push(x[0])
  }

  // Values To Nodes Mapping
  const valToNodes = new Map()
  for (let i = 0; i < n; i++) {
    if (!valToNodes.has(vals[i])) valToNodes.set(vals[i], [])
    valToNodes.get(vals[i]).push(i)
  }

  const uf = new UnionFind(n)
  let goodPaths = 0
  const sortedVals = Array.from(valToNodes.keys()).sort((a, b) => a - b)
  for (const val of sortedVals) {
    const nodes = valToNodes.get(val)

    for (const node of nodes) {
      for (const neighbor of adj[node]) {
        vals[neighbor] <= vals[node] && uf.union(node, neighbor)
      }
    }

    const groups = new Map()
    for (const node of nodes) {
      const root = uf.find(node)
      groups.set(root, (groups.get(root) || 0) + 1)
    }

    for (const size of groups.values()) {
      goodPaths += Math.floor((size * (size + 1)) / 2)
    }
  }

  return goodPaths
}

console.log(
  numberOfGoodPaths(
    [1, 3, 2, 1, 3],
    [
      [0, 1],
      [0, 2],
      [2, 3],
      [2, 4],
    ]
  )
)
