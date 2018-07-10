var reverse = function(x) {
    var res = 0;
    var sign = 1;
    var max = 2147483647;
    if(x >= -9 && x <= 9) return x;
    if(x < 0){
        sign = -1;
        x = -x;
    }
	while(x > 0){
		var digit = x % 10;		
        x = Math.floor(x / 10);
        if(x!= 0 && max/10 < res)
            return 0;  
        if(x == 0 && max/10 < res) return 0;
		res = ( res * 10) + digit;		       
	}  
    
    return sign * res;
};