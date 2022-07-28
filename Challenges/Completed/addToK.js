//This challenge is to see if there is two numbers in our array list numbers[] that can be added together to be equal to the random generated  number in randomNumber.
const numbers = [10, 15, 3, 7]
const randomNumber = Math.floor(Math.random() * 20) //Random Number between 1 to 20
console.log(randomNumber)

//Looping through the array
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    console.log(numbers[i] + numbers[j])

    //Checking every possible add sequence to determine if there is a correct answer
    if (numbers[i] + numbers[j] === randomNumber) {
      console.log(true)
    }
  }
}
