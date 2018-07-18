function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

  var executeBinaryTreeToDLL = function(){    
 
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
  
 binaryTreeToDLL(a,null);
  };

// This is Inorder method // level order using BFS is in Algorithms note
function binaryTreeToDLL(node,head ){
	if(node == null) return;
     binaryTreeToDLL(node.left,head);

	if(binaryTreeToDLL.prev == null){
		head = node;
	}
	else{
		binaryTreeToDLL.prev.right = node;
		node.left = binaryTreeToDLL.prev;
	}
	binaryTreeToDLL.prev = node;
	binaryTreeToDLL(node.right, head);	
}

binaryTreeToDLL.prev = null;