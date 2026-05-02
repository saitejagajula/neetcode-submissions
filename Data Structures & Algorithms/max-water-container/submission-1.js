class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
            let i=0
            let n=heights.length-1
            let max=0
            while(i<n){
                let height=Math.min(heights[i],heights[n])
                let width=n-i
                let area=height*width;
                if(heights[n]>heights[i]){
                    i++
                }
                else{
                    n--
                }
                max=Math.max(max,area)
            }


 return max

    }
   
}
