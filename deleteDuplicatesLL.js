

function ListNode(val) {
    this.val = val;
        this.next = null;
  }

var deleteDuplicates = function(head) {
    
    if(head == null) return null;
    if(head.next == null) return head;
    var prev = head;
    var curr = head.next;
    
    while(curr!=null){
        if(prev.val!=curr.val){
            prev=prev.next;
            curr=curr.next;
        }
        else{
            curr=curr.next;
            prev.next=curr;
        }
    }
   return head; 
};

var deleteDuplicates1 = function(head) {

    var one = new ListNode(1);
    var two = new ListNode(1);
    var three = new ListNode(2);
    one.next=two;
    two.next=three;
    three.next=null;

    head=one;
    var prev=head;
    var curr=head.next;
    var temp=null;
    while(curr!=null)
        {
            if(prev.val===curr.val){
                temp=curr;
                prev.next=curr.next;
                curr=temp.next;
            }
            if(temp===null)
                {
                    prev=prev.next;
                    curr=curr.next;
                }
            temp=null;
        }
        printList(head);
};

var printList=function(head){
    for(var i=head;i!=null;i=i.next){
        console.log(i.val);
    }
}