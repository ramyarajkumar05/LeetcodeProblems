
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }

var executeLargestInEachRow = function(){
    var zero = new TreeNode(0);
    var minusone = new TreeNode(-1);
    
    zero.left = minusone;
    
    return largestValues(zero);   
};


var largestValues = function(root) {
    if(root == null) 
        return [];
    if(root.left == null && root.right == null)
        return [root.val];
  //  final.push(root.val);

    var a = getMaxInNextRow([root], [root.val]);  
    return a;
};


var getMaxInNextRow = function(arrOfNodes, final){
    if(arrOfNodes.length == 0) 
        return final;
    var max = null;
    var row = [];
    for(var i=0; i<arrOfNodes.length; i++){
        if(arrOfNodes[i].left!=null)
            row.push(arrOfNodes[i].left);
        if(arrOfNodes[i].right!=null)
            row.push(arrOfNodes[i].right);
        
        if(arrOfNodes[i].left!=null || arrOfNodes[i].right!=null){           
            var temp = getMaxChildOfNode(arrOfNodes[i]);
            if(max == null)
                max = temp;
            else
                max = Math.max(temp , max);
        }
    }

     if(max!= null)
        final.push(max);
    getMaxInNextRow(row, final); 
    return final;
};


 var getMaxChildOfNode = function(node){
  if(node == null) 
      return null;  
    else if(node.left != null && node.right != null)
        return Math.max(node.left.val, node.right.val);
    else if(node.left == null)
        return node.right.val;
    else
        return node.left.val;
};




 


var largestValues = function(root) {
    if(root == null) 
        return [];
    if(root.left == null && root.right == null)
        return [root.val];
  //  final.push(root.val);

    var a = getMaxInNextRow([root], [root.val]);  
    return a;
};


var getMaxInNextRow = function(arrOfNodes, final){
    if(arrOfNodes.length == 0) 
        return final;
    var max = null;
    var row = [];
    for(var i=0; i<arrOfNodes.length; i++){
        if(arrOfNodes[i].left!=null)
            row.push(arrOfNodes[i].left);
        if(arrOfNodes[i].right!=null)
            row.push(arrOfNodes[i].right);
        
        if(arrOfNodes[i].left!=null || arrOfNodes[i].right!=null){           
            var temp = getMaxChildOfNode(arrOfNodes[i]);
            if(max == null)
                max = temp;
            else
                max = Math.max(temp , max);
        }
    }

     if(max!= null)
        final.push(max);
    getMaxInNextRow(row, final); 
    return final;
};


 var getMaxChildOfNode = function(node){
  if(node == null) 
      return null;  
    else if(node.left != null && node.right != null)
        return Math.max(node.left.val, node.right.val);
    else if(node.left == null)
        return node.right.val;
    else
        return node.left.val;
};