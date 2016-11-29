/**
 * @param {string} s
 * @return {string}
 */
var reverseString1 = function(s) {
    if(s.length === 0 || s.length === 1) return s;
    var low=0;
    var high=s.length-1;
    console.log("temp is "+s[low]);
    while(low<high){
        var temp="";
        temp=s[low];
       s=replaceAt(s,low,s[high]);
       s=replaceAt(s,high,temp);
        low++;
        high--;
    }

    return s;
};

var replaceAt=function(s,index, character) {
    return s.substr(0, index) + character + s.substr(index+character.length);
}


//Accepted in 146ms
var reverseString = function(s) {
    return split("").reverse().join("");
    
};

var reverseString=function(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
