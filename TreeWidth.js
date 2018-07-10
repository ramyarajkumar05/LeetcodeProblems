//var mW = 1;
function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }

var executeTreeWidth = function(){
    var a = new TreeNode("a");
    var b = new TreeNode("b");
    var c = new TreeNode("c");
    var d = new TreeNode("d");
    var e = new TreeNode("e");
    var g = new TreeNode("g");
    var l = new TreeNode("l");
    var m = new TreeNode("m");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = g;
d.right = l;
g.left = m;
    
    return main(a);   
};
var main = function(root){
	var wid = rowWidth([root], 1);
	return wid;
};

var rowWidth = function(a, mW){
	if(a.length == 0) return mW;
	var temp = [];
	for(var i=0; i<a.length; i++){
		if(a[i] == null){
			temp.push(null);
			temp.push(null);
			continue;
		}
		if(a[i].left != null)
			temp.push(a[i].left);
		else
			temp.push(null);

		if(a[i].right != null){
			temp.push(a[i].right);
		}
		else
			temp.push(null);
	}

		// Now temp is populated, truncate the leading and trailing nulls.
		temp = truncateNulls(temp);
		mW = Math.max(mW, temp.length);
		mW = rowWidth(temp, mW);
		return mW;
};

var truncateNulls = function(arr){
	var i = 0;

	if(arr.length == 0) return arr;
	if(arr[0] == null){
		while(i < arr.length && arr[i] == null){			
			i++;
		}
	}

	arr.splice(0,i);
		var j = arr.length-1;
	if(arr[j] == null){
		while(j>=0 && arr[j] == null){			
			j--;
		}
	}
	arr.splice(j+1, arr.length-1-j);
	return arr;

}