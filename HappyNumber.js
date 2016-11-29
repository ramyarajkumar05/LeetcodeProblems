// Accepted with 142 ms runtime

/**
 * @param {number} num
 * @return {boolean}
 */

var isHappy =function(num) {
	var str;
	var map={};
	while(num!=1){
		if(map[num]!=null) {return false;}
		map[num]=1;
		num=getSumOfSquares(num);
	}
    return true;
};
var getSumOfSquares = function(num){
    var sum=0;
    var digit = 0;
    while(num>0){
        digit=num%10;
        num=Math.floor(num/10);
        sum+=digit*digit;
    }
    return sum;
}