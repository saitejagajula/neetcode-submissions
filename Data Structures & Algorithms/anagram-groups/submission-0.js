class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj={}
        for(let i of strs){
        let sorted=i.split('').sort().join('');
        if(!obj[sorted]){
            obj[sorted]=[]
        }
        obj[sorted].push(i)
        }
          return Object.values(obj)
    }
  
}
