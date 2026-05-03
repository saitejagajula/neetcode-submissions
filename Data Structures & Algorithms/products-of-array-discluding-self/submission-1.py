class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        product=[1 for _ in range(len(nums))]
        left=1
        right=1
        for i in range(0,len(product)):
            product[i]*=left
            left*=nums[i]
        for j in range(len(product)-1,-1,-1):
            product[j]*=right
            right*=nums[j]
        return product
        
        