from collections import Counter
class UserMainCode(object):
    @classmethod
    def dumplings(cls,input1, nums):
        q = input1
        dicu = Counter(nums)
        arr = list(set(nums))
        n = len(arr)
        dp = [0]*n
        e1=e2=0
        for i in range(n):
            cur = dicu[arr[i]] * arr[i]
            tmp  = e2
            if i > 0 and arr[i] == arr[i-1] + 1 :
                e2 = max(e2,cur+e1)
            else :
                e2 += cur 
            e1 = tmp
        return e2
