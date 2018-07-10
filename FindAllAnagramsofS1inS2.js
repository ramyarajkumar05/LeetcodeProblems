/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s2, s1) {
    var map1 = {};
   var map2 = {};
    var nums =[];
    //Populate s1 map
    for(var j=0; j< s1.length; j++){
        if(map1[s1[j]] == null)
            map1[s1[j]] = 1;
        else
            map1[s1[j]] = map1[s1[j]] + 1;
    }
    // populate the first s1.length characters of s2 in s2map
    for(var k=0; k<s1.length; k++){
        if(map2[s2[k]] == null)
            map2[s2[k]] = 1;
        else
            map2[s2[k]] = map2[s2[k]] + 1;
    }
    if(matches(map1, map2)){
        nums.push(0);
    
    }
        map2[s2[0]] = map2[s2[0]] - 1;
    
    //Moving forward just add the next character in the s2 map, compare both maps, if doesn't match then remove the 1st character from map and proceed.
    for(var i=1; i<= s2.length - s1.length; i++){
        if(map2[s2[i+s1.length-1]] == null)
            map2[s2[i+s1.length-1]] = 1;
        else
            map2[s2[i+s1.length-1]] = map2[s2[i+s1.length-1]] + 1;
        
        if(matches(map1, map2)){
        nums.push(i);
    }
        map2[s2[i]] = map2[s2[i]] - 1;  
        
    }
   return nums; 
};

var matches = function(map1, map2){
    for(key in map1){
        if(map1[key] != map2[key])
            return false;
    }
    return true;
};