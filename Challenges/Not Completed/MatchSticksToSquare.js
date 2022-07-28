//https://leetcode.com/problems/matchsticks-to-square/

function matchsticks(arr) {
  const square = [];
  for (let i = 0; i < arr.length; i++){
    if (arr.every(num => num === i)){
      return true
    }
    
  }

  return false
}

console.log(matchsticks([1, 1, 2, 2, 2]))
// console.log(
//   matchsticks([
//     1, 1, 2, 2, 2, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   ])
// )
