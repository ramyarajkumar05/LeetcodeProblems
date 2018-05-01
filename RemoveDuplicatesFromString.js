var removeDuplicates = function(Str){
	//var ch = Str.split('');
	 
	var map = {};
	var Str2 = "";
	for (var i = 0; i <Str.length; i++) {
		if(map[Str[i]] == null){
			map[Str[i]] = 1;
			Str2 += Str[i];
		}
	}
	console.log("Neew string is "+ Str2);
}