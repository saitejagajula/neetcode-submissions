class Solution:
    def maxArea(self, heights: List[int]) -> int:
        a=heights
        l,r=0,len(a)-1
        maxarea=0
        while l<r:
            area=(r-l) * min(a[l],a[r])
            maxarea=max(maxarea,area)
            if a[l]<a[r]:
                l+=1
            else:
                r-=1
        return maxarea
        

        