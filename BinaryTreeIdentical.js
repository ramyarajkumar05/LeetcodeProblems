var isIdentical = function(a,b){
	var left;
	var right;
	if(a==null && b!=null) || (a!=null && b==null ) || ( a!=null &b!=null && a.val!=b.val) return false;


	if(a.left==null && b.left!=null) || (a.left!=null && b.left ==null) return false;
	left = isIdentical(a.left,b.left);
	if(!left) return false;

	if(a.right==null && b.right!=null) || (a.right!=null && b.right ==null) return false;
	right = isIdentical(a.right,b.right);
	return right;
};

var invertTree = function(node){
if(node==null) return;
var temp = node.right;
node.right=node.left;
node.left=temp;
invertTree(node.left);
invertTree(node.right);
}

var isSymmetric= function(node){
var invertedTree = null;

if(node.left == null && node.right !=null || node.left != null && node.right ==null || node.left.val != node.right.val) 
	return false;
if(node.left!=null){
invertedTree = invertTree(node.left);


return isIdentical(invertedTree, node.right);

}

}