"use strict";
var increasingSubsequences1 = function(nums) {
    
     if(nums == null || nums.length == 0) return 0;
    if(nums.length == 1) return 1;
   
    var paths = [];
    
    var res = new Set();
  
    for(var i=0; i<nums.length; i++){         
        
        paths[i]= [nums[i]];
        var j = 0;        
        while(j!=i){
            if(nums[j] <= nums[i]){               
                
                    for(var k=0; k<paths[j].length; k++)
                     paths[i].push(paths[j][k] + nums[i] + " ");
            } 
             
            j++;
        } 
          
    } 
    
    for(var i=0; i<paths.length; i++){
        for(var j=0; j< paths[i].length; j++){
            var arr = paths[i][j].trim().split(" ");
            var temp = [];
            for(var k=0; k<arr.length; k++){
                temp.push(parseInt(arr[k]));
            }
            if(temp.length>1 && !res.has(temp))
                res.add(temp);
        }
    }
    console.log(res);
  return res;
};
//////////////////////////////////
var res= new Set();
res.add([66]);
var findSubsequences = function(nums) {
         
         var holder = [];
         findSequence(holder, 0, nums);
         console.log(res);
         return res;
     }

    var findSequence = function(holder,index,nums) {
        if (holder.length >= 2) {
            res.add([holder]);
        }
        for (var i = index; i < nums.length; i++) {
            if(holder.length == 0 || holder[holder.length- 1] <= nums[i]) {
                holder.push(nums[i]);
                findSequence(holder, i + 1, nums);
                holder.splice(holder.length - 1,1);
            }
        }
    }

///////////////////////////////////////////////
var copyArray = function(arr){
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        newArr[i] = arr[i];
    }
    return newArr;
};
var increasingSubsequencesOLD = function(nums){
    
    var res= [];
    for(var i=0; i<nums.length; i++){
        var temp = [];
        for(var index in res){
            var currRes = res[index];
            if(currRes[currRes.length-1] <= nums[i]){
                var copy = copyArray(currRes);
                copy.push(nums[i]);
                temp.push(copy);
            }
        }
        if(temp.length != 0)
            res= res.concat(temp);

        res.push([nums[i]]);
    }
    return res;
}






//////
var increasingSubsequences = function(nums){
    var map = {};
    var res= [ ];
    var final = [];
    for(var i=0; i<nums.length; i++){
        res[i] = [ ]; 
        var j = 0;
        if(map[nums[i]] == null)
            map[nums[i]] = i;
        else{
             j = map[nums[i]];
        }

        
        for(; j<i; j++){        

        for(var index in res[j]){
            var currRes = res[j][index];
            if(currRes[currRes.length-1] <= nums[i]){
                var copy = copyArray(currRes);
                copy.push(nums[i]);
                
                res[i].push(copy);
                if(copy.length > 1)
                    final.push(copy);

            }
        }
    }
        

        res[i].push([nums[i]]);
    }

console.log(final);
    return final;
}


