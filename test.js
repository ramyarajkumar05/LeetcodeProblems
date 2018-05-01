
var reverse= function(s,low,high){
    
    var temp = "";
    
   // console.log("Org string is "+s);
    while(low<high){
        temp = s[low];
        s[low] = s[high];
        s[high] = temp;
        low++;
        high--;
    }
    //console.log("Reverse is "+s.join(''));
    return s;
}
var test = function(str){
	var i=0; var pos=0;
	var a = str.split('');
	var n = a.length;
	while(i<n){
		while(i<n && a[i] != " ") i++;
		if(i<n){
			reverse(a,pos,i-1);
			i++;
			pos=i;
		}
}
reverse(a,pos,i-1);
	return a.join('');
};
