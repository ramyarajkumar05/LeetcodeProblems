var getPermutations =  function (str) {
	var allChars = str.split('');
	var result = [];
	 getPermute(str.length,0, "", allChars, result);
	 console.log(result);
	 return result;
};

var getPermute = function(len, index, stringSoFar, possChars, result){
	var count = -1;
	if(possChars.length == 0){		
		result.push(stringSoFar);		
	}

	for(ch in possChars){
		count++;
		var currString = stringSoFar + possChars[ch];
		var copyPossChars = copy(possChars);
		copyPossChars.splice(count, 1);
		getPermute(len, index+1, currString, copyPossChars, result);
	}

}