/*
Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
*/
var groupAnagrams = function(strs) {
    var map = {} ,resultArr = [];
    
   for(var i=0;i<strs.length;i++){
       
    	var key = strs[i].split("").sort().join("");
       
    	if (map[key]!=null) {
            map[key].push(strs[i]);
        } else {
            map[key] = [strs[i]];
        }
    }
    
    for (var key in map) {
        console.log("map[key] is "+map[key].length);

        for(var i=0;i<map[key].length;i++)
        {
            resultArr.push(map[key][i]);
        }

        //resultArr.push(map[key]); // If the o/p has to be array of array of string eg: [[anagram,nagaram],[ate,tea], [blah]]
    }
    console.log(resultArr);
    return resultArr;
};
var groupAnagrams1 = function(strs) {
    var map = {} ,resultArr = [];
    function addIndexToObj (element) {
        var key = element.split("").sort().join("");
        console.log("key is "+key +"; Element is "+element);
        if (map[key]!=null) {
            map[key].push(element);
            //console.log("key is "+key +"; Value is "+map[key]);
        } else {
            map[key] = [element];
        }
    }
   strs.forEach(addIndexToObj);
    
    for (var key in map) {
    	//console.log(map[key] +"   "+map[key].sort());
        resultArr.push(map[key]);
    }
    
    console.log(resultArr[0]);
    console.log(resultArr[1]);
    console.log(resultArr[2]);
    return resultArr;
}
module.exports = groupAnagrams;