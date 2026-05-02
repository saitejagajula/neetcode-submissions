class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let seq={}
       for(let i of strs){
        let count=Array(26).fill(0)
        for(let j of i){
            count[j.charCodeAt(0) - 97]++;
        }
        count.join("#")
        if(!seq[count]){seq[count]=[]}
        seq[count].push(i)
       }
       return Object.values(seq)
       
    }
  
}
