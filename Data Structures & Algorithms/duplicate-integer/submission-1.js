class Solution {
   hasDuplicate(nums) {
    let freq={}
    for (let i of nums){
        if(freq[i]){
            freq[i]+=1;
             }
        else {freq[i]=1}
    }
    for(let key in freq){
        if(freq[key]>1){
            return true
        }

       }
       return false
   }
}
let s=new Solution;