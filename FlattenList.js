// 0  1    2   3
//[1,[2,3],8,[4,5,6]]

var result = [];
var flattenList = function(array){
	console.log("Org array "+array.length);
for(var i=0; i< array.length; i++){
	if(array[i] instanceof Array){
		flattenList(array[i]);
	}
	else{
		result.push(array[i]);
	}
}
console.log(result);
return result;
}

// Leetcode way of implementing an iterator - Flatten a list and then iterate with O(n) extra space
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var result = [];
var NestedIterator = function(nestedList) {
    flattenList(nestedList);
};

var flattenList = function(nestedList){	
    for(var i=0; i< nestedList.length; i++){
	    if(!nestedList[i].isInteger()){
		    flattenList(nestedList[i].getList());
	    }
	    else{
		    result.push(nestedList[i].getInteger());
	    }
    }
}

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    if(count == result.length)
        return false;
    else
        return true;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
var count = 0;
NestedIterator.prototype.next = function() {
    var number = result[count];
    count++;
    return number;
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
////////////////////////////
// Using Stack with O(h) space where h is the depth of the list
var NestedIterator = function(nestedList) {
    var stack = [];    
    for (var i=nestedList.length-1; i>=0; i--){
        stack.push(nestedList[i]);
    }
    this.stack = stack;
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    var stack = this.stack;
    while(stack.length > 0){
        var node = stack.pop();
        if (node.isInteger()){
            stack.push(node);
            return true;
        }
        var list = node.getList();
        for (var i = list.length-1; i>=0; i--){
            stack.push(list[i]);
        }
    }
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.stack.pop().getInteger();
};