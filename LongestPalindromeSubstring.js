// Time O(n^2); Space O(1)
var max = Number.MIN_VALUE;
var start = 0;
var result = [];
var longestPalindrome = function(str){
	for(var i=0; i< str.length; i++){
		expandPalindrome(str, i, i); // Odd length palindrome substring
		expandPalindrome(str, i, i+1); //Even length palindrome substring
	}
	str = str.substr(start, max);
	return str;
};

// Prints the longest palindrome substring
var expandPalindrome1 = function(str, low, high){
	while(low >= 0 && high < str.length && str[low] == str[high]){
		low--;
		high++;
	}
	if(high - low - 1 > max){
		max = high - low - 1;
		start = low + 1;
	}
}
///////////////////////////////////

var distinctPalindromes = function(str){
	for(var i=0; i< str.length; i++){
		expandPalindrome(str, i, i); // Odd length palindrome substring
		expandPalindrome(str, i, i+1); //Even length palindrome substring
	}
	console.log(result.length);
	return result;
};
// Prints all the distinct palindrome substrings
var expandPalindrome = function(str, low, high){
	while(low >= 0 && high < str.length && str[low] == str[high]){
		var temp = str.substr(low, high-low+1);
		if(result.indexOf(temp) == -1)
			result.push(temp);
		low--;
		high++;
	}
	
}


//module.exports = longestPalindrome;
//module.exports = expandPalindrome;
