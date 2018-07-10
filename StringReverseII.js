/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var i=0;
    while(i<s.length){
        var low = i;
        var high = i+k-1;
        if(high < s.length){
            s = reverse(s,low,high);
            i = i+2000;
        }
        else
            s = reverse(s,low, s.length-1);
        
        
    }
    return s;
};

var reverse = function(s, low, high){
    var str = s.split('');
    var temp;
    while(low<high){
        temp = str[low];
        str[low] = str[high];
        str[high] = temp;
        low++;
        high--;
    }
    return str.join('');
}