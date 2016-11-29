"use strict";
//Accepted in 108ms
var isPalindrome=function(head){
var stack=[];
var list=head;
while(list!==null){
	stack.push(list.val);
	list=list.next;
}
while(head!==null){
	if(head.val!=stack.pop())
		return false;
	head=head.next;
}
return true;
}
var isPalindrome2=function(list){
	if(list==null || list.next==null)return true;

	if(list.next.next==null){
		if(list.val!=list.next.val)return false;
		else return true;
	}

	var ptr1=list;
	var ptr2=list;
	while(ptr2!=null && ptr2.next!=null && ptr2.next.next!==null){
		ptr1=ptr1.next;
		ptr2=ptr2.next.next;
	}

	var prev=ptr1.next;
	var curr=ptr1.next.next;

	var head=reverseList(prev);
	ptr1.next=null;

console.log("list is "+list.val);
console.log("list is "+list.next.val);
//console.log("list is "+list.next.next.val);
	while(list!=null && head!=null){
		console.log("ccc "+list.val + "       "+head.val);
		if(list.val!=head.val) return false;
		head=head.next;
		list=list.next;
	}
	return true;
}
var reverseList = function(list)
{
	if(list == null || list.next == null) return list;

	var prev = list;
	var curr = list.next;


	while(curr.next != null)
		{
			var temp = curr.next;
			curr.next = prev;
			prev = curr;
			curr = temp;
		}

	curr.next = prev;
	list.next = null;
	list = curr;
	console.log("reversed list is "+list.val);
	console.log("reversed list is "+list.next.val);
	return list;
}

var check=function(){
	var node1=new ListNode(1);
	var node2=new ListNode(0);
	var node3=new ListNode(0);

	var node4=new ListNode(8);
	var node5=new ListNode(10);

	node1.next=node2;
	node2.next=node3;
	node3.next=null;
	//node4.next=node5;
	//node5.next=null;
	console.log("answer is "+isPalindrome2(node1));
};