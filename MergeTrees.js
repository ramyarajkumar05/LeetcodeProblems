/* Merge 2 trees
Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7 */

var mergeTrees = function(t1, t2) {
    if(t1 == null && t2!= null){        
        return t2;
    }
   else if(t1 != null && t2== null){
       return t1;
   }
    else if(t1==null && t2==null)
        return null;
   
    t1.val += t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
};