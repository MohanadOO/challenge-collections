//https://leetcode.com/problems/maximum-units-on-a-truck/
//Easy

function MaximumUnitsOnTruck(boxTypes, truckSize) {
  let countBoxes = 0
  const sortBoxByMaxUnitsPerBox = boxTypes.sort((a, b) => {
    return b[1] - a[1]
  })

  return sortBoxByMaxUnitsPerBox.reduce((a, b) => {
    if (countBoxes <= truckSize) {
      countBoxes = countBoxes + b[0]
      if (countBoxes >= truckSize) {
        const totalUnits = a + (b[0] - (countBoxes - truckSize)) * b[1] 
        return totalUnits
      }
      return a + b[0] * b[1]
    }
    return a
  }, 0)
}

console.log(
  MaximumUnitsOnTruck(
    [[2,1],[4,4],[3,1],[4,1],[2,4],[3,4],[1,3],[4,3],[5,3],[5,3]],
    13
  )
)
console.log(
  MaximumUnitsOnTruck(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )

)
console.log(
  MaximumUnitsOnTruck(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10
  )
)
