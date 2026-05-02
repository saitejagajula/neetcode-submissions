class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length)return false
        let count={}
        for(let i of s){
            if(!count[i]){
                count[i]=1
            }
            else{count[i]++}
        }
        for(let j of t){
            if(!count[j]){return false}
            else{count[j]--}
        }
        return true
           
    }
}
