class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n=nums.length;
        let left=1;
        let right=1
        let result=Array(n).fill(1)
        for(let i=0;i<n;i++){
             result[i]=left;
             left*=nums[i]
        }
        for(let j=n-1;j>=0;j--){
            result[j]*=right
            right*=nums[j]
        }
        return result
    }
}
