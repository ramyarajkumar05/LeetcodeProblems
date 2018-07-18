
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
 
 var ten = new TreeNode(10);
 var five = new TreeNode(5);
 var mthree = new TreeNode(-3);
 var three = new TreeNode(3);
 var two = new TreeNode(2);
 var eleven = new TreeNode(11);
 var three2 = new TreeNode(3);
 var mtwo = new TreeNode(-2);
 var one = new TreeNode(1);
 
 ten.left = five;
 ten.right = mthree;
 five.left = three;
 five.right = two;
 mthree.right = eleven;
 three.left = three2;
 three.right = mtwo;
 two.right=one;
 
return pathSumIII(ten,8);
  };

 
var pathSumIII = function(root, target) {
    var map={};
    map[0] = 1;   
    var total = helperpathSumIII(root, 0,map, target);  
    return total;
};

var helperpathSumIII = function(root, currsum, map, target){
    if(root == null) return 0;
    currsum += root.val; 
    var res = 0;   
    if(map[currsum - target] != null)
        res = map[currsum-target];
    if(map[currsum] == null) 
        map[currsum] = 1;
    else
        map[currsum] = map[currsum] + 1;    
    res += helperpathSumIII(root.left, currsum, map, target);
    res+= helperpathSumIII(root.right, currsum,map, target);
   //console.log(root.val +" "+totalPath);
    
    map[currsum] = map[currsum] - 1; 
    return res;
};