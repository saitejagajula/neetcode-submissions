class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj={}
        for(let i in nums){
            let secnum=target-nums[i]
            if(obj[secnum]!==undefined){
                return [Number(obj[secnum]),Number(i)]
            }
            obj[nums[i]]=i
        }
    }
}
