//https://leetcode.com/problems/lemonade-change/?envType=study-plan&id=programming-skills-ii

function lemonadeChange(bills: number[]): boolean {
  let five = 0
  let ten = 0

  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i]
    if (bill === 5) five++
    else if (bill === 20) {
      console.log(ten, five)
      if (ten >= 1 && five >= 1) {
        ten--
        five--
      } else if (five >= 3) five = five - 3
      else return false
    } else if (bill === 10) {
      if (five >= 1){
        five--
        ten++
      }
      else return false
    }
  }
  return true
}

console.log(lemonadeChange([5, 5, 5, 10, 20]))
console.log(lemonadeChange([5, 5, 10, 10, 20]))
console.log(lemonadeChange([5, 5, 5, 10, 5, 20, 5, 10, 5, 20]))
console.log(
  lemonadeChange([
    5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5,
  ])
)
console.log(lemonadeChange([5, 5, 5, 5, 20, 20, 5, 5, 20, 5]))
