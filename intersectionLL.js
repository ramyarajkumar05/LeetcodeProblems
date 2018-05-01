"use strict";
function ListNode(val) {
      this.val = val;
     this.next = null;
  }
var length = function(head){
	var length=0;
	while(head!=null){
		head=head.next;
		length++;
	}
	return length;
};

var intersection = function(headA, headB){

	var h1 =  headA;
	var h2= headB;
var l1=length(h1);
var l2=length(h2);
while(l1>l2){
	h1=h2.next;
	l1--;
}

while(l2>l1){
	h2=h2.next;
	l2--;
}

while(h1!=null){
	if(h1.val!=h2.val){
		h1=h1.next;
		h2=h2.next;
	}
	else{
		return h1;
	}
}
return null;
};