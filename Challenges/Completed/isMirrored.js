function isMirrored(num) {
  const numSplitArr = num.toString().split('')

  return numSplitArr.every((i, index) => {
    return i === numSplitArr[numSplitArr.length - index - 1]
  })
}

let result = isMirrored(16461)
console.log(result)
