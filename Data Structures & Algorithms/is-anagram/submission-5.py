class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        ana={}
        if len(s)!=len(t):
            return False
        for i in s:
            if i in ana:
                ana[i]+=1
            else:
                ana[i]=1
        for j in t:
            if j not in ana :
                return False
            ana[j]-=1
            if ana[j]<0:
                return False
        return True
                     