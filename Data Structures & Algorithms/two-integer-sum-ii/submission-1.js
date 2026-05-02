class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let seq={}
        for(let i in numbers){
            let num=target-numbers[i]
            if(seq[num]){
                return [Number(i)+1,Number(seq[num])+1].sort()
            }
            seq[numbers[i]]=i
        }
    }
}
