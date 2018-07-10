"use strict";
/**
 * @param {TreeNode} root
 * @return {boolean}
 
    5
   / \
  1   4
     / \
    3   6
Output: false
 /**
 * Definition for a binary tree node. */
 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

 var executeisValidBST = function(){
 var zero = new TreeNode(1);
 var five = new TreeNode(5);
 var one = new TreeNode(1);
 var four = new TreeNode(4);
 var three = new TreeNode(3);
 var six = new TreeNode(6);
 one.left = zero;
 return isValidBST(one);
  };
var isValidBST = function(root) {
    var min = Number.MIN_VALUE;
    var max = Number.MAX_VALUE;
    return helper(root, min, max);
};

var helper = function(root, min, max){
   if(root == null) return true;
   if(root.val < min || root.val > max)
       return false;
    return helper(root.left, min, root.val) && helper(root.right, root.val, max);
};