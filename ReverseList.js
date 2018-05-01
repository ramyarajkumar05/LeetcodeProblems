function ListNode(val) {
    this.val = val;
        this.next = null;
  }
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var one = new ListNode(1);
    var two = new ListNode(1);
    var three = new ListNode(2);
    one.next=two;
    two.next=three;
    three.next=null;

    head=one;
    if((head===null) || (head.next===null)) return; 
    var prev=head;
    var curr= head.next;
    
    while(curr.next!==null){
        temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
    }
    
    curr.next=prev;
    head.next=null;
    head=curr;
    return head;
};