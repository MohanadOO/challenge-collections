//https://leetcode.com/problems/next-greater-element-i/
//Easy

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const greaterElements: number[] = []
    for (let i = 0; i < nums1.length; i++){
        const indexInNUMS2 = nums2.indexOf(nums1[i])
        let temp: number = nums2[indexInNUMS2]
        
        for (let j = indexInNUMS2; j < nums2.length; j++){
            if (nums2[j] > temp){
                temp = nums2[j]
                break
            }
        }
        if (temp !== nums1[i]) greaterElements.push(temp)
        else greaterElements.push(-1)
    }
    return greaterElements
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))
