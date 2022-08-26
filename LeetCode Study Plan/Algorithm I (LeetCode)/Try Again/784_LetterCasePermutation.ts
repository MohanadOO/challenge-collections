//https://leetcode.com/problems/letter-case-permutation/
//Medium

function letterCasePermutation(s: string): string[] {
    const len = s.length
    const result: string[] = []
    let arr: string[] = []
    let char = /[a-zA-Z]/
    
    function backtrack(i: number): void{
        if (i === len){
            result.push(arr.join(''))
            return
        }

        if (char.test(s[i])){
            arr[i] = s[i].toLowerCase()
            backtrack(i + 1)

            arr[i] = s[i].toUpperCase()
            backtrack(i + 1)
        }

        else {
            arr[i] = s[i]
            backtrack(i + 1)
        }

    }

    backtrack(0)
    return result
};

console.log(letterCasePermutation('a1b2'))
