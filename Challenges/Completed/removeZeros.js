//https://www.codewars.com/kata/52aae14aa7fd03d57400058f/train/javascript

function removeZeros(array) {
  const otherElementList = []
  const zeroList = []
  const result = []

  let otherListPosition = 0
  let zeroListPosition = 0

  for (let i = 0; i < array.length; i++) {
    const element = array[i]

    if (element === 0 || element === '0') {
      zeroList[otherListPosition] = element
      otherListPosition++
    } else {
      otherElementList[zeroListPosition] = element
      zeroListPosition++
    }
  }

  for (let i = 0; i < otherElementList.length; i++) {
    result[i] = otherElementList[i]
  }

  const resultLength = result.length
  for (let i = resultLength; i < resultLength + zeroList.length; i++) {
    result[i] = zeroList[i - resultLength]
  }

  return result
}

console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]))
