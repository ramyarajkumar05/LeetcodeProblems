/**
 * @param {number[]} a
 * @return {number}
 */
 // Accepted in Leetcode 88ms
 var rob= function(a){
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


























