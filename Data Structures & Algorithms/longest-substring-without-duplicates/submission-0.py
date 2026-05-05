class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        seq={}
        r,l,maxlen=0,0,0
        while r<len(s):
            if s[r] in seq and l<=seq[s[r]]:
                l=seq[s[r]]+1
        
            seq[s[r]]=r
            maxlen=max(maxlen,r-l+1)
            r+=1
        return maxlen
        