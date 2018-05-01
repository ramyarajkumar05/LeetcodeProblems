
 /*

 Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?

 */
 function ListNode(val) {
     this.val = val;
     this.next = null;
  }
 

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var onePointer= head;
    var twoPointer=head;    
   
    
    do{
        if(twoPointer===null || twoPointer.next===null || twoPointer.next.next===null) return false;
        onePointer=onePointer.next;
        twoPointer=twoPointer.next.next;
        
    }while(onePointer!=twoPointer);
    return true;
};