//Evaluate an expression given only single digits and only 2 operators * and +.
var evaluateExpression = function (str) {
	var stack = [];
	var i=0;
	while(i<str.length){
		if(parseInt(str[i]) >=0 && parseInt(str[i]) <= 9){
			stack.push(parseInt(str[i]));
			i++;
		}
		else if(str[i] == '*'){
			var val = stack.pop();
			val = val * parseInt(str[i+1]);
			stack.push(val);
			i = i+2;
		}
		else
		i++;		
	}
	var sum = 0;
	while(stack.length != 0){
		sum = sum + stack.pop();
	}
	return sum;
}
//module.exports = evaluateExpression;