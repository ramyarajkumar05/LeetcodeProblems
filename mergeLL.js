function ListNode(val) {
    this.val = val;
        this.next = null;
  }

var mergeSortedLL = function(l1,l2) {


l1=new ListNode(1,null);
l2=new ListNode(2,null);


if(l1==null) return l2;
if(l2==null) return l1;
var temp;
var fakeHead= new ListNode(0);
fakeHead.next=l1;

var prev=fakeHead;

while(l1!==null && l2!=null){

	if(l1.val<l2.val){
		prev=prev.next;
		l1=l1.next;
	}
	else
	{
		temp=l2.next;
		prev.next=l2;
		l2.next=l1;
		l2=temp;
		prev=prev.next;
	}
}


if(l1==null){
	prev.next=l2;
}
printList(fakeHead.next);
return fakeHead.next;

};

var printList=function(head){
    for(var i=head;i!=null;i=i.next){
        console.log(i.val);
    }
}