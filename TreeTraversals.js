function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

  var executePreorder = function(){    
 
 var a = new TreeNode('a');
 var b = new TreeNode('b');
 var c = new TreeNode('c');
 var d = new TreeNode('d');
 var e = new TreeNode('e');
 var f = new TreeNode('f'); 
 
 a.left = b;
 a.right = c;
 b.left = d;
 b.right = e;
 c.right = f;

 inorder(a);
}

var preorder = function(root){
	if(root == null) return;
	var stack = [];
	while(true){
		if(root != null){
			console.log(root.val);
			stack.push(root);
			root = root.left;
		}else{
			if(stack.length <= 0) return;
			root = stack.pop();
			root = root.right;
		}
		
	}
};

var inorder = function(root){
	if(root == null) return;
	var stack = [];
	while(true){
		if(root != null){			
			stack.push(root);
			root = root.left;
		}else{
			if(stack.length <= 0) return;
			root = stack.pop();
			console.log(root.val);
			root = root.right;
		}
		
	}
}