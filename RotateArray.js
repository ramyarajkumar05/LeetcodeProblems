/**
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
 * @param {number[]} a
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Accepted in leetcode 106ms

var rotate = function(a,k){
	var rotate="";
	var n=a.length;
	
	if(n!=null && n>1){
		k=k%n;
		var temp=[];
		for(var i=n-k;i<=n-1;i++){
			temp.push(a[i]);
		}
		for(i=n-k-1;i>=0;i--){
			a[i+k]=a[i];
		}
		for(i=0;i<temp.length;i++){
			a[i]=temp[i];
		}
	}
}

