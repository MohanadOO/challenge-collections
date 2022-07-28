//A Pangram is when a sentence includes all the alphabets at least once.
function isPangram1(string){

  let alphabet = "abcdefghijklmnopqrstuvwxzy"
  let compareAlphabet = []

  //Check every letter from the string.
  for (let i = 0; i < string.length; i++){
   //iterate through the alphabets to match it with string letter.
   for (let j = 0; j < alphabet.length; j++){
    //If the string letter match an alphabet then we compare it with a compareAlphabet array.
     if (string[i].toLowerCase() === alphabet[j]){
        //Check if the matched letter already included in the compareAlphabet array or not.
       if (!compareAlphabet.includes(alphabet[j])){
        //if it is not included than we push the letter to the compareAlphabet array.
        compareAlphabet.push(alphabet[j])
       }
     }
   }
  }

  if (compareAlphabet.length === 26) return true
  return false
}

//Other solutions.
function isPangram2(string) {
  string = string.toLowerCase()
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(function (x) {
      //if every string letter exist it should have an index value of 0 or more depending on it's position on the sentence provided put if it does not exist it would be -1 which going to cost the every() method to be false.
    return string.indexOf(x) !== -1
  })
}

const result1 = isPangram1('The quick brown fox jumps over the lazy dog.')
const result2 = isPangram2('This is not a pangram.')
console.log(result1, result2)
