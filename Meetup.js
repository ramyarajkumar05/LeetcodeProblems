var levelOrderBottom = function(root){
	var queue = [];
	var stack = [];
	queue.push(root);

	while(queue.length!=0){
		var size = queue.length;
		for(var j = 0; j<size; j++){
		var node = queue.shift();
		stack.push(node.value);

		if(node.right != null)
			queue.push(node.right);
		if(node.left != null)
			queue.push(node.left);
	}
    if(queue.length!=0)
	stack.push(null);
}
	while(stack.length!=0){
		// check for null value
		console.log(stack.pop());
	}
}

///////////////
public List<List<Integer>> levelOrderBottom1(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<TreeNode>();
        List<List<Integer>> list = new LinkedList<List<Integer>>();
        if(root == null) return list;
        queue.offer(root);
        while (!queue.isEmpty()) 
        {
            //TreeNode tempNode = queue.poll();
            int levelNum = queue.size();
            List<Integer> sublist = new LinkedList<>();
            for(int i = 0; i < levelNum; i++) {
                if(queue.peek().left != null) queue.offer(queue.peek().left);
                if(queue.peek().right != null) queue.offer(queue.peek().right);
                sublist.add(queue.poll().val);
                
            }
            list.add(0, sublist);
        }
        return list;
    }
