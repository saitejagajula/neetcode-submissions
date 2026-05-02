class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq={}
        let arr=[]
        for(let i of nums){
            if(!freq[i]){
                freq[i]=1
            }
            else{
                freq[i]+=1
            }
        }
       let buckets=Array(nums.length+1).fill().map(()=>[])
       for(let num in freq){
        buckets[freq[num]].push(Number(num))

       }
       let result=[]
       for(let i=buckets.length-1;i>=0 &&result.length<k;i--){
        for(let j of buckets[i]){
            result.push(j)
            if(result.length===k){return result}
        }
       }
       return result
    }
    
}
