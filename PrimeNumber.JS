// Given number is prime or not
var isPrime = function(n){
	for(var i=2; i<=n/2; i++)
	{
		if(n%i == 0){		
			//console.log("false");
			return false;			
		}
	}
	//console.log("true");
	return true;
};

// Print the first n prime numbers
var printPrime = function(n){
	console.log("2");
	var count = 1;
	var val=3;
	while(true){
		if(count == n)
			return;
		if(isPrime(val)){
			count++;
			console.log(val);
		}
		val++;
	}
};

// print all prime numbers less than n
var printPrimelessthanN = function(n){
	console.log("2");
	var val = 3;
	while(true){
		if(val >= n )
			return;
		if(isPrime(val)){
			console.log(val);			
		}
		val++;
	}
};

// print prime between 2 intervals
var printPrimeBetween2Interval = function(low, high){
	while(low < high){
		if(isPrime(low)){
			console.log(low);
		}
		low++;
	}

};
