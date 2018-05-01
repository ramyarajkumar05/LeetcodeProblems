/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 
var partition = function(head, x) {
if(head == null) return head;
    
var small = null;
var big = null;
var bigHead = null;
var smallHead = null;
    
while(head != null) {
    var newNode = new ListNode(head.val, null);
    if(head.val < x){
        if(small == null) {
            small  = newNode;
            smallHead = small;
        }
        else
            small.next = newNode;  
    }
    else{
        if(big == null) {
            big  = newNode;
            bigHead = big;
        }
        else
            big.next = newNode;
    }
    head = head.next;
}  
    small.next = bigHead;
    return smallHead;    
};