/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function(s) {
    if(s == null || s.length <= 0) return 0;
    var count=0;
    var pos=0;
    var i=0;
    var map={};    
    while(pos<= s.length-1){
        if(map[s[pos]] == null)
            map[s[pos]] = pos;
        else{
            
            if( Object.keys(map).length > count)
                count = Object.keys(map).length;
            
            pos = map[s[pos]] + 1;
            delete map;
            var map={};
            map[s[pos]] = pos;
            
        }
        pos++;
    }    
    if(count < Object.keys(map).length)
        return Object.keys(map).length;
    else
    return count;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s == null || s.length <= 0) return 0;
    var count=0;
    var i=0;
    var j=0;
    var map={};    
    while(i< s.length){
        if(map[s[i]] != null){   
            j = Math.max(j,map[s[i]]+1);                             
        }
        map[s[i]] = i;        
        i++;
        count = Math.max(count, i-j); 
    }       
    return count; 
};
