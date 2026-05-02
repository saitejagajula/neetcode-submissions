class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seq = {};

        for (let num of nums) {
            if (seq[num]) {
                return true; 
            }
            seq[num] = 1;
        }

        return false; 
    }
}

