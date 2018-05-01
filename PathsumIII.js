
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

  var executePathsumIII = function(){    
 var five = new TreeNode(5);
 var four = new TreeNode(4);
 var eight = new TreeNode(8);
 var eleven = new TreeNode(11);
 var thirteen = new TreeNode(13);
 var four1 = new TreeNode(4);
 var seven = new TreeNode(7);
 var two = new TreeNode(2);
 var one = new TreeNode(1);
 var five1 = new TreeNode(5);
 five.left = four;
 five.right = eight;
 four.left = eleven; 
 eleven.left = seven;
 eleven.right = two;
 eight.left = thirteen;
 eight.right=four1;
 four1.left=five1;
 four1.right=one;
return pathSumIII(five,22);
  };

 
var pathSumIII = function(root, target) {
    var map={};
    map[0] = 1;   
    var total = helper(root, 0,map, target);  
    return total;
};

var helper = function(root, currsum, map, target){
    if(root == null) return 0;
    currsum += root.val; 
    var res = 0;   
    if(map[currsum - target] != null)
        res = map[currsum-target];
    if(map[currsum] == null) 
        map[currsum] = 1;
    else
        map[currsum] = map[currsum] + 1;    
    res += helper(root.left, currsum, map, target);
    res+= helper(root.right, currsum,map, target);
   //console.log(root.val +" "+totalPath);
    
    map[currsum] = map[currsum] - 1; 
    return res;
};