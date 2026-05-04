class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        a=prices
        l,r=0,1
        maxprofit=0
        while(r<len(a)):
            if a[l]<a[r]:
                profit=a[r]-a[l]
                maxprofit=max(maxprofit,profit)  
            else :
                l=r
            r+=1    
        return maxprofit  