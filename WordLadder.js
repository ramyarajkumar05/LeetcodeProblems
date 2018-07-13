

var min = Number.MAX_VALUE;
var callWordLadder = function(start, end, list){
	var set = new Set(list);
	
	var queue1 = [];
	var obj = {str: start, visited:[start]};
	queue1.push(obj);
	
	return wordLadder(queue1, end, set, [], level);
};

var wordLadderDFS = function(start, end, list, visited, min){
	visited.push(start);

	var matches = getMatches(start, end, list, visited);

	if(matches.length == 0){
		if(min == Number.MAX_VALUE) 
			return 0; 
		else 
			return Number.MAX_VALUE;
	} 
	if(matches.indexOf(end)!= -1){
		visited.push(end);
		return visited.length;
	}
	else{
		for(var index in matches){
			var temp = copyArray(visited);
			var currLen = wordLadder(matches[index], end, list, temp, min);
			if(currLen < min){
				min = currLen;				
			} 
		}
	}
	if(min == Number.MAX_VALUE) return 0;
	return min;
};
var getMatchesOLD = function(start, end, list, visited){
	var result = [];
	for(var i=0; i<list.length; i++){
		if(visited.indexOf(list[i]) != -1){
			continue;
		}
		var k=0;
		for(var j=0; j< list[i].length; j++){
			if(list[i][j] != start[j]){
				k++;
				if(k > 1)
					break;
			}
		}
		if(k==1)
			result.push(list[i]);

	}
	return result;
}

var copyArray = function(arr){
	var newArr = [];
	for(var i=0; i<arr.length; i++){
		newArr[i] = arr[i];
	}
	return newArr;
}
////////////////////////////////////////////////


var wordLadder = function(queue1, end, set, visited, level){
	var queue2 = [];
	var getMatchObj = {};
	while(queue1.length > 0){
		var obj = queue1.shift();
		//visited.push(val);
		 getMatchObj = getMatches(obj.str, end, set, obj.visited);

		if(getMatchObj.matches.length == 0){
			if(queue1.length == 0 && queue2.length == 0)
				return 0;
			else
				continue;
		}

			
		if(getMatchObj.matches.indexOf(end)!= -1){		
			return obj.visited.length + 1;
		}
		else{			
			for(var i = 0; i<getMatchObj.matches.length; i++){
				var tempArray = copyArray(obj.visited);
				tempArray.push(getMatchObj.matches[i]);
				var temp = {str: getMatchObj.matches[i], visited: tempArray};
				queue2.push(temp);
			}
		}		
	}
	queue1 = queue2;
	queue2 = [];

	//var temp = copyArray(visited);
	var level = wordLadder(queue1, end, getMatchObj.set, temp, level);	

	return level;
};

var getMatches = function(start, end, set, visited){
	var result = [];
	var ch = start.split('');
	for(var i=0 ;i<ch.length; i++){
		for(var c = 0; c<26; c++){
			var old = ch[i];
			
			var code = 'a'.charCodeAt(0)+ c;
			ch[i] =String.fromCharCode(code);
			var temp = ch.join('');
			if(set.has(temp) && visited.indexOf(temp) == -1){
				result.push(temp);
				set.delete(temp);
			}
			
			ch[i] = old;		

		}
	}
var obj ={matches : result, set: set};
return obj;
};

