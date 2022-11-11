//https://leetcode.com/problems/range-sum-query-2d-immutable/?envType=study-plan&id=programming-skills-ii
//Medium

class NumMatrix { 
  private matrix: number[][]
  constructor(matrix: number[][]) {
    this.matrix = matrix
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let sum = 0;
    
    for (let i = row1; i <= row2; i++){
        for (let j = col1; j <= col2; j++){
         sum += this.matrix[i][j]
        }
    }
    return sum
  }
}

const matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]


const obj = new NumMatrix(matrix)

const param_1 = obj.sumRegion(2 ,1, 4, 3)
const param_2 = obj.sumRegion(1,1,2,2)
const param_3 = obj.sumRegion(1,2,2,4)

console.log(obj)
console.log(param_1)
console.log(param_2)
console.log(param_3)

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
