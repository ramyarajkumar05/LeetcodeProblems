var characterReplacement = function(s,k) {
        var cArr = [];
        var maxCount = 0, start = 0, maxSize = 0;
        for(var i=0; i<26; i++){
            cArr[i]=0;
        }
        for(var end = 0; end < s.length; end ++){
            cArr[s[end].charCodeAt(0) - 'A'.charCodeAt(0)]++;
            maxCount = Math.max(maxCount, cArr[s[end].charCodeAt(0) - 'A'.charCodeAt(0)]);
            
            // if max character frequency + distance between start and end is greater than k
            // this means we have considered changing more than k charactres. So time to shrink window
            while(end - start + 1 - maxCount > k){
                cArr[s[start].charCodeAt(0) - 'A'.charCodeAt(0)]--;
                start ++;
            }
            
            maxSize = Math.max(maxSize, end - start + 1);
        }
        
        return maxSize;
    }