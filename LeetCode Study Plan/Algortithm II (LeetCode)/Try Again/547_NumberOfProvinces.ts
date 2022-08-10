//https://leetcode.com/problems/number-of-provinces/
//Medium

function findCircleNum(isConnected: number[][]): number {
  if (!isConnected) return 0

  const visited = new Set()
  let provinces = 0


  for (let i = 0; i < isConnected.length; i++) {
    if (!visited.has(i)){
      dfs(i)
      provinces++;
    }
  }

  function dfs(i: number){
    for (let j = 0; j < isConnected.length; j++){
      if (isConnected[i][j] === 1 && !visited.has(j)){
        visited.add(j);
        dfs(j)
      }
    }
  }

  return provinces
}


console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
)
console.log(
  findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
)
