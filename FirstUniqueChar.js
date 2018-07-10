var firstUniqChar = function( s) {
        var freq = [];
        for(var i = 0; i<26; i++)
        	freq[i] = 0;
        for(var i = 0; i < s.length; i ++)

            freq [s[i].charCodeAt(0) - 'a'.charCodeAt(0)] ++;
        for(var i = 0; i < s.length; i ++)
            if(freq [s[i].charCodeAt(0) - 'a'.charCodeAt(0)] == 1)
                return i;
        return -1;
    }