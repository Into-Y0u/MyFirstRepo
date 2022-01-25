# row = int(input())
row = 5
# n = input()
n = "1345"
nums = list(n.strip())
arr = [[0]*row for i in range(row)] 
flag = 1 ; k = 0 ; l = len(nums)
for i in range(row) :
    for j in range(row) :
        if flag  :
            x = nums[k]
            k+=1
            if k == l :
                flag = 0 
                k = l-1
        else :
            x = nums[k]
            k-=1
            if k < 0 :
                flag = 1 
                k = 0
        arr[i][j] = x
for ele in arr :
    print(*ele)
