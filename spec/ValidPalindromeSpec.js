describe("ValidPalindromeSubstring", function() {
	var validPalindrome = require('../LongestPalindromeSubstring');

	it("TC1", function() {    
    var str = "babcaacb" ;
    var val = validPalindrome(str);
    expect(val).toEqual("bcaacb");
  });
});
