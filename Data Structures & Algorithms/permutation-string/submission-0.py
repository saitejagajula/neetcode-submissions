class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1)>len(s2):
            return False
        need=[0]*26
        window=[0]*26
        for i in s1:
            need[ord(i)-ord("a")]+=1    
        print(need)   
        l=0 
        r=0
        while r < len(s2):
            window[ord(s2[r])-ord("a")]+=1
            if r-l+1 >len(s1):
                window[ord(s2[l])-ord("a")]-=1
                l+=1
            if need==window:
                return True
            r+=1
        return False

