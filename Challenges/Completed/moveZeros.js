//https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  const otherElementList = []
  const zeroList = []
  arr.forEach((element) => {
    if (element === 0) {
      return zeroList.push(element)
    }
    return otherElementList.push(element)
  })

  return otherElementList.concat(zeroList)
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))
