//https://leetcode.com/problems/find-closest-node-to-given-two-nodes/

const edges = [
  [2, 2, 3, -1],
  [3, 2, 3, -1],
  [1, 2, -2],
]
// Solution => https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/2864716/find-closest-node-to-given-two-nodes/?orderBy=most_votes
function closestMeetingNode(
  edges: number[],
  node1: number,
  node2: number
): number {
  const len = edges.length
  const dist1 = new Array(len).fill(Number.MAX_SAFE_INTEGER)
  const dist2 = new Array(len).fill(Number.MAX_SAFE_INTEGER)
  dist1[node1] = 0
  dist2[node2] = 0

  const visit1 = new Array(len).fill(false)
  const visit2 = new Array(len).fill(false)
  dfs(node1, edges, dist1, visit1)
  dfs(node2, edges, dist2, visit2)

  let minDistNode = -1
  let minDistTillNow = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < len; i++) {
    if (minDistTillNow > Math.max(dist1[i], dist2[i])) {
      minDistNode = i
      minDistTillNow = Math.max(dist1[i], dist2[i])
    }
  }

  return minDistNode
}

function dfs(node: number, edges: number[], dist: number[], visit: boolean[]) {
  visit[node] = true
  let neighbor = edges[node]
  if (neighbor !== -1 && !visit[neighbor]) {
    dist[neighbor] = 1 + dist[node]
    dfs(neighbor, edges, dist, visit)
  }
}

console.log(closestMeetingNode(edges[0], 0, 1))
// console.log(closestMeetingNode(edges[1], 0, 2))
