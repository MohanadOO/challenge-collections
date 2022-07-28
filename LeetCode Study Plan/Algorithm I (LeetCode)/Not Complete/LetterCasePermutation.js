//https://leetcode.com/problems/letter-case-permutation/
//Medium

/**
 * @param {string} s
 * @return {string[]}
 */
let letterCasePermutation = function (s) {
    const isString = s.split('').filter(letter => isNaN(letter))
    const isNumber = s.split('').filter(letter => !isNaN(letter))

    console.log(isString, isNumber)

    

}

console.log(letterCasePermutation('a1b2'))
