/*
We are given an array A of positive integers, and two positive integers L and R (L <= R).

Return the number of (contiguous, non-empty) subarrays such that the value of the maximum array element in that subarray is at least L and at most R.

Example :
Input: 
A = [2, 1, 4, 3]
L = 2
R = 3
Output: 3
Explanation: There are three subarrays that meet the requirements: [2], [2, 1], [3].
*/
/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function(A, L, R) {
    var count = 0;
    var res = 0;
    var j=0;
    for(var i = 0; i<A.length; i++){
        if(A[i] >= L && A[i] <= R){
            res = res+ (i-j+1);
            count = i-j+1;
        }
        else if(A[i] < L)
            res+= count;
        else{
            j = i+1;
            count = 0;
        }
    }
     return res;  
};