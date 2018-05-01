var prac1 = function(){
	console.log("HEll");

	var s = ["anagram", "eat","blah","nagaram","tea"];
	var arr=[["1","2"],["3","4"]];
	arr.push(["tag","gat"]);
	arr.push(["aaa","aaa4","5ddd","frf6"]);
	arr.push(["7frfrf"]);

	var path = [1,2,3];
	var res = [];
	res.push(path);
	console.log("res at 0 is "+res[0]);
	path = [4,5,6];
	res.push(path);
	console.log("res at 1 is "+res[1]);

	var str1 = "ramya";
	console.log(str1);
	var str2 = "aswin12345";
	str1 = str2;
	console.log(str1);
	
	
}
var prac = function(){
  	
 var five = new TreeNode(5);
 var four = new TreeNode(4);
 var eight = new TreeNode(8);
 var eleven = new TreeNode(11);
 var thirteen = new TreeNode(13);
 var four1 = new TreeNode(4);
 var seven = new TreeNode(7);
 var two = new TreeNode(2);
 var one = new TreeNode(1);
 five.left = four;
 five.right = eight;
 four.left = eleven;
 eight.right = seven;
 var blah;
 
 /*eleven.left = seven;
 eleven.right = two;
 eight.left = thirteen;
 eight.right=four1;
 four1.right=one;*/
return helper(five,20);
  };
var pathsThatAddsToSum = function(root, sum) {
    var left,
        right,
        i;
    
    if(root===null)return [];
    if(sum===root.val&&root.left===null&&root.right===null)return [[root.val]];
    
    left=pathsThatAddsToSum(root.left,sum-root.val);
    right=pathsThatAddsToSum(root.right,sum-root.val);
    
    for(i=0;i<left.length;i++){
        left[i].unshift(root.val);
    }
    for(i=0;i<right.length;i++){
        right[i].unshift(root.val);
    }
    console.log(left.concat(right));
    return left.concat(right);
};


var hasPathSum100 = function(root, sum) {
	var l ,r;
    if(root == null) return [];

    if(root.left == null && root.right == null)
        {
        		//console.log(root.val);
        if( sum - root.val == 0)
            return [[root.val]];       
        }
    
    if(root.left!=null){
         l= hasPathSum(root.left, sum-root.val);
         console.log(root.left +"   "+l);
    }
    
    if(root.right!=null){
    //	console.log("right not null "+sum-root.val);
         r= hasPathSum(root.right, sum-root.val);
          console.log(root.right +"   "+r);
    }

   for(i=0;i<l.length;i++){
        l[i].unshift(root.val);
    }
    for(i=0;i<r.length;i++){
        r[i].unshift(root.val);
    }
   // console.log(left.concat(right));
    return left.concat(right);
};

var res = [];
var helper = function (root, sum) {
       
        actual(root, sum, []);
        console.log(res);
        return res;
    }
    
    var actual = function( root,  sum, path) {
		
        if (root == null) {
            return;
        }        
        path.push(root.val);

        if (root.left == null && root.right == null && sum == root.val) {
        	console.log("path is "+path);
        	console.log("res before push "+res);
            res.push(path.slice());
            console.log("res after push is "+res);

        } 
            actual(root.left, sum - root.val,path);
            actual(root.right, sum - root.val,path);
        
        
        path.pop();

    }