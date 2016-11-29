/*Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime? */
// Accepted in 122ms
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num){
	var s =""+num+"";
	if(s.length== 1) return num;
	
	do{
		var sum=0;
	for(var i=0;i<s.length;i++){
		sum+= parseInt(s[i]);
	}
	s=""+sum+"";
}while(s.length>1);
return parseInt(s);
}

// Using Math formula. This is also called digital root
// Accepted in 128 ms
var addDigits = function(num){
 
 return num-9*(Math.floor((num-1)/9));

}
