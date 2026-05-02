class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        dirs={}
        for i in nums:
            if i in dirs:
                dirs[i]+=1
            else:
                dirs[i]=1
        a=len(nums)+1
        result=[[]for _ in range(a)] 
        for i in dirs:
            result[dirs[i]].append(i)
        solution=[]
        print(result)
        for i in range(len(result)-1,0,-1):
            for m in result[i]:
                solution.append(m)
                if(len(solution)==k):
                    return solution

        