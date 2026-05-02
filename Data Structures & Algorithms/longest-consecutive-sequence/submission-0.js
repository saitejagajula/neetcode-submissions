class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let seq= new Set(nums)
        let max=0;
        let count=0
        for(let i of nums){
            if(!seq.has(i-1)){
                let j=i
                 count=1
                while(seq.has(j+1)){
                   
                    j++
                     count++
                }
               
            }
            max=Math.max(count,max)
        }
        return max;
}
}

