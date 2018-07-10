
var romanToInt = function(s) {
    var map = {"I":1, "V": 5, "X":10, "L":50, "C":100, "D":500, "M":1000};
    var i=1;
    var total = 0;
    while(i<s.length){
        if(map[s[i-1]] >= map[s[i]])
            total += map[s[i-1]];
        else
            total -= map[s[i-1]]
        i++;
    }
    //if(s.length % 2 == 0)
        total += map[s[s.length-1]];
  return total;
};