/**
 * @param {number[]} a
 * @return {number}
 */
var rob2= function(a){
    var maxArray=[];
    if(a==null || a.length===0) return 0;
    if(a.length ===1 ) return a[0];
    if(a.length ===2 ) return Math.max(a[0],a[1]);

maxArray[0] = a[0];
maxArray[1] = Math.max(a[0],a[1]);  
    for(var i=2;i<a.length;i++){

      var yes=a[i]+maxArray[i-2];

      var no=maxArray[i-1];      

      maxArray[i]=Math.max(yes,no);

  }
  return maxArray[maxArray.length-1];
}
///////////////////////////////////////////////////////////////

var rob= function(a){

   if( a== null || a.length == 0) return 0;
    if(a.length == 1) return a[0];
    if(a.length == 2) return Math.max(a[0],a[1]);
    var map={};
    return profit(a, a.length-1, map);    
};

var profit1 = function(a, k){
    
    if(k<0) return 0;
    var yes = a[k] + profit(a,k-2);
    var no = profit(a,k-1);
    console.log("P(k)is "+Math.max(yes,no));
    return Math.max(yes,no);
}
var profit = function(a, k, map){   
    
    
    if(k<0) return 0;
    if(map[k-2]!= null) 
        var yes = a[k] + map[k-2];
    else
        var yes = a[k] + profit(a,k-2, map);
    
    if(map[k-1]!= null) 
        var no =  map[k-1];
    else
        var no = profit(a,k-1, map);
    console.log("P(k)is "+Math.max(yes,no));
    if(map[k] == null) map[k] = Math.max(yes,no);
    return Math.max(yes,no);
}

module.exports = rob;
