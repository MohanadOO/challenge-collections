//https://leetcode.com/problems/snakes-and-ladders
const boards = [
  [
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 35, -1, -1, 13, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 15, -1, -1, -1, -1],
  ],
  [
    [-1, -1],
    [-1, 3],
  ],
]

type Pos = {
  row: number
  col: number
}

function snakesAndLadders(board: number[][]): number {
  // Not Complete
  // return snakesAndLaddersDFS(board)

  return snakesAndLaddersBFS(board)
}

function snakesAndLaddersDFS(board: number[][]): number {
  const edge = { row: board.length - 1, col: board.length - 1 }
  let moves = 0
  let currPos: Pos = { row: edge.row, col: 0 }
  let startLeft = true

  function dfs(board: number[][], currPos: Pos, moves: number) {
    for (let i = 0; i <= 6; i++) {
      let curr = getCurrPos(currPos['row'], i)
      if (currPos.row === 0 && currPos.col === (startLeft ? edge.col : 0)) {
        return
      }
      // dfs(board, curr, moves)
    }
  }

  function getCurrPos(row: number, col: number): Pos {
    let curr = { row, col: col + (startLeft ? 1 : -1) }
    if (curr.col > edge.col) {
      currPos.row = row - 1
      currPos.col = startLeft ? edge.row : 0
      curr = currPos
      startLeft = !startLeft
    }
    return curr
  }

  dfs(board, currPos, moves)
  return moves
}

//Solution => https://leetcode.com/problems/snakes-and-ladders/solutions/3092269/100-fast-javascript-very-easy-to-understand-with-video-explanation/
function snakesAndLaddersBFS(board: number[][]): number {
  const boardLen = board.length
  let set = new Set()
  const queue = [[1, 0]]

  function getLoc(pos: number): number[] {
    let row = Math.floor((pos - 1) / boardLen)
    let col = (pos - 1) % boardLen
    col = row % 2 === 1 ? boardLen - 1 - col : col
    row = boardLen - 1 - row
    return [row, col]
  }

  while (queue.length) {
    const [pos, moves] = queue[0]
    queue.shift()

    for (let i = 1; i < 7; i++) {
      let newPos = i + pos
      let [r, c] = getLoc(newPos)
      if (board[r][c] !== -1) newPos = board[r][c]
      if (newPos === boardLen * boardLen) return moves + 1
      if (!set.has(newPos)) {
        set.add(newPos)
        queue.push([newPos, moves + 1])
      }
    }
  }

  return -1
}

console.log(snakesAndLadders(boards[0]))
console.log(snakesAndLadders(boards[1]))
