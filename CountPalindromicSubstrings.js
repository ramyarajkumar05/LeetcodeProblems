/**Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:
Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
 * @param {string} s
 * @return {number}
 */

var countSubstrings = function(s) {
    var total = 0;
    for(var i=0; i<s.length; i++){
        total = checkPalindrome(s, i, i, total);
        total = checkPalindrome(s, i, i+1, total);
    }
    return total;
};

var checkPalindrome = function(s, low, high, total){
    while(low >= 0 && high < s.length && s[low] == s[high]){       
            total++;
            low--;
            high++;       
    }
    return total;
}