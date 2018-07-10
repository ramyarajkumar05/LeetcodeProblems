/*Given a set of strings, e.g. {“one”, “cat”, “two”, “four”}, and a target string, e.g. “fouroneone”, return true if the target string is composed (by concatenation) of elements from the set.   

“four
one
one” -> true
 0:i
“onecat” -> true
“fouron” -> false
“twone” -> false
"onone"

 */
var set = {};
set["on"] = 1;
set["one"] = 1;
set["two"] = 1;
set["cat"] = 1;
set["four"] = 1;
// var isConcat = function(target){
//   //var bool = false;
//   var temp ="";
//   for(var i=0; i<target.length; i++){
//     temp += target[i];
//     console.log(temp);
//     if(set[temp]!= null){      
      
//       target = target.substr(i+1);
//       console.log("target is "+target);
//       if(target.length > 0)
//       return isConcat(target );
//       else{
//         console.log("target is empty");
//         temp =  "";
//         return true;
        
//       }
        
//     }    
    
//   } 
//   if(temp.length >0) return false;
// };
var gmap = {};

var isConcat = function(target){
  var temp ="";

  if (target.length == 0) return true;

  for(var i=0; i<target.length; i++) {

    temp += target[i];
    console.log(temp);

    if(set[temp]!= null) {      
      
      var blah = target.substr(i+1);
      console.log("blah is " + blah);

       if (isConcat(blah)) {
       // gmap[blah] = true;
        return true;
      }
        
    }    
    
  }  

  return false;
};