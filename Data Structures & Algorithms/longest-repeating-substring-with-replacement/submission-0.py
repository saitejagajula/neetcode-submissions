class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        l,r,maxlen=0,0,0
        seq={}
        while r<len(s):
            seq[s[r]]=seq.get(s[r],0)+1
            while r-l+1 - max(seq.values())>k:
                seq[s[l]]-=1
                l+=1
            maxlen=max(maxlen,r-l+1)
            r+=1
        return maxlen
