/*Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.*/

var validParenthesis = function(s){	
	if( s.length == 0) return true;
	var stack = [];
	var star = [];
    var flag = false;
	var ch = s.split('');
	for(var i=0; i<ch.length; i++){
		if(ch[i] == '(' || ch[i] == '*')
			stack.push(ch[i]);
		else if(ch[i] == ')'){
			if(stack.length == 0) return false;
			while(stack.length != 0){
				var val = stack.pop();
				if(val == '(')
				 	 { 
				 	 	flag = true;
				 	 	break;
				 	 }
				else if(val == '*')
					star.push('*');
			}
            if(!flag) star.pop();
			for(var j=0; j<star.length; j++){
				stack.push('*');
			}
			star = [];
            flag = false;
		}
        else
            return false;
	}
	if(stack.length == 0) return true;

	while(stack.length!= 0) {
		var val = stack.pop();
		if(val == '*') 
			star.push('*');
		else{
			if(star.length == 0) return false;
			star.pop();
		}
	}

	if(stack.length == 0) return true;
	return false;
//module.exports = validParenthesis;