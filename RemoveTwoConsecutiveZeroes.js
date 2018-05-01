var removeZero = function(str){
	var newStr = "";
	var count = 0;
	for(var i=0; i<str.length;i++){
		if(str[i] != 0){
			newStr+= str[i];
			count=0;
		}
		else{
			count++;
			if(count == 3)
			newStr += '000';
			else if(count > 3)
				newStr += str[i];
		}
	}
	console.log("The newStr is "+newStr);
	return newStr;
}