// Given a string, check if the permutation of the string can form a palindrome
// For this, each character should be repeated even number of times, except 1 odd length character
var palindromePermutation = function (str) {
	var count = 0;
	var map = {};
	for (var i = 0; i < str.length; i++) {
		if(map[str[i]] == null)
			map[str[i]] = 1;
		else
			map[str[i]] = map[str[i]] + 1;
	}
	for(var key in map)
		count += map[key] % 2;

	return count <= 1;
};