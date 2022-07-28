function mySub(num1, num2) {
  let answer = 0

  if (num1 > num2) {
    for (let i = num2; i < num1; i++) {
      answer++
    }
    return answer
  }

  for (let i = num1; i < num2; i++) {
    answer--
  }
  return answer
}

console.log(mySub(4, 10))
