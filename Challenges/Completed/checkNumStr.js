function addStrNums(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return -1
  }
  return Number(num1) + Number(num2)
}

console.log(addStrNums('7', '9'))
