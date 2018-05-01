var isPrime = function(n){
	for(var i=2; i<n; i++)
	{
		if(n%i == 0){		
			console.log("false");
			return false;			
		}
	}
	console.log("true");
	return true;
}


