/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(target) {
    var a = [];
    if(a === null || a.length == 0) {
        console.log("null array so -1");
        return -1;}
    var map={};
    for(var i=0; i< a.length; i++){
        map[a[i]] = i;
        console.log("map of "+a[i] +" is "+map[a[i]]);
    }
    
    if(map[target] == null)
    {
        console.log("-1");
        console.log(target);
        console.log(map[target]);

        return -1;
    }
    else
    {
        console.log(map[target]);
        return map[target];   
    }
    
};



var search1 = function(a, target) {
    
    if(a == null || a.length == 0) return -1;
    var k;
    if(a[0] < a[a.length-1]) k=0;
    else{
        for(var i=0;i<a.length;i++){
            if(a[i] > a[i+1]){
                k=i+1;
                break;
            }
        }
    }
    
    if(k!=0){
        reverseArray(a, 0, a.length-1);
        reverseArray(a,0,a.length-1-k);
        reverseArray(a,k+1,a.length-1);
    }
    // My array is not rotated at this point. It will be a straight array.
    
    return binarySearch(a,target);
    
};

var binarySearch = function(a, target){
    var low = 0;
    var high = a.length-1;
    var mid;
    
    while(low<high){
        mid = Math.abs((low + high)/2 );
        if(a[mid] == target)
            return mid;
        else if(a[mid] < target)
            low = mid+1;
        else
            high = mid-1;
    }
    return -1;
    
}
var reverseArray = function(a, low, high){    
    var temp;
    while(low<high){
        temp = a[low];
        a[low] = a[high];
        a[high] = temp;
        low++;
        high--;
    }
}