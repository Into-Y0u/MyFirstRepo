#include<stdio.h>

int main() {
    int n ,m, i = 0 ,j,x,k, nums[100] , flag = 1 ,row ;
    int arr[100][100] ; 
    scanf("%d",&n);
    scanf("%d",&row);
    
    m = n ;
    
    while (1) {
        nums[i] = m%10 ; 
        m = m/10 ;
        i++;
        if (m < 10 ){
            nums[i]  = m;
            break;
        }
    }
    int len = i+1 ; 

    // for(i = 0 ; i < len ; i++){
    //     printf("\n %d",nums[i]);
    // }
    k = len-1;
    for(i = 0 ; i < row ; i++){
        for(j = 0 ; j < row ; j++){
            if (flag==1 && k>=0){
                x = nums[k];
                k--;
                if (k < 0){
                    flag = 0;
                    k = 0 ; 
                }         
            }
            else{
                x = nums[k];
                k++;
                if (k == len) {
                    flag = 1;
                    k = len - 1 ;
                } 
            }
    
            arr[i][j] = x;
        }
    }
    printf("\n");
    for(i = 0 ; i < row ; i++){
        for(j = 0 ; j < row ; j++){
            printf("%d ",arr[i][j]);
        }
        printf("\n");
    }
    
}
