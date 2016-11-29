/**
 * @param {number[]} nums
 * @return {number}
 */
 //Accepted in leetcode in 99ms
var rob= function(a){
    var maxArrayONE=[];
    var maxArrayTWO=[];
    if(a==null || a.length===0) return 0;
    if(a.length ===1 ) return a[0];
    if(a.length ===2 ) return Math.max(a[0],a[1]);
    maxArrayONE[0] = a[0];
    maxArrayONE[1] = Math.max(a[0],a[1]); 

    maxArrayTWO[0]=0;
    maxArrayTWO[1]=a[1];  
    
    for(var i=2;i<a.length;i++){

      var yes=a[i]+maxArrayONE[i-2];      
      var no=maxArrayONE[i-1];      
      maxArrayONE[i]=Math.max(yes,no);

      yes=a[i]+maxArrayTWO[i-2];      
      no=maxArrayTWO[i-1];      
      maxArrayTWO[i]=Math.max(yes,no);
  } 

  return Math.max(maxArrayONE[maxArrayONE.length-2],maxArrayTWO[maxArrayTWO.length-1]);
}