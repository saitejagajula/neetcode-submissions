class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        obj={}
        for i in strs:
            a=[0]*26
            for j in i:
                a[ord(j) - 97] += 1
            val=tuple(a)
            if val not in obj:
                obj[val]=[]
            obj[val].append(i)
        return list(obj.values())