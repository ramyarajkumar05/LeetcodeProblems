// 0  1    2   3
//[1,[2,3],8,[4,5,6]]
var flattenList = function(list){
	var res = [];
for(var i = 0; i<list.length;i++){
	if(list[i] instanceof Array){
		for(var j=0; j<list[i].length; j++){
			res.push(list[i][j]);
		}
	}
	else{
		res.push(list[i]);
	}
}
console.log(res.toString());
console.log(res);
return res.toString();
}