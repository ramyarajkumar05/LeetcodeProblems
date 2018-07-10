var decodeString = function(s) {
        var count = [];
        var result = [];
        var i = 0;
        result.push("");
        while (i < s.length) {
            var ch = s[i];
            if (ch >= '0' && ch <= '9') {
               // var start = i;
                //while (s[i + 1] >= '0' && s[i + 1] <= '9') i++;
                //count.push(parseInt(s.substr(start, i + 1)));
                count.push(parseInt(ch));
            } else if (ch == '[') {
                result.push("");
            } else if (ch == ']') {
                var str = result.pop();
                var sb = "";
                var times = count.pop();
                for (var j = 0; j < times; j += 1) {
                    sb+=str;
                }
                result.push(result.pop() + sb);
            } else {
                result.push(result.pop() + ch);
            }
            i += 1;
        }
        return result.pop();
    }