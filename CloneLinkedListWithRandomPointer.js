/**
 * Definition for singly-linked list with a random pointer.
 */
  function RandomListNode(label) {
      this.label = label;
      this.next = this.random = null;
  }
 
var executeCloneLL = function(){
    var one = new RandomListNode(1);
    var two = new RandomListNode(2);
    var three = new RandomListNode(3);
    var four = new RandomListNode(4);

    var hash = new RandomListNode('#');

    one.next = hash;
    hash.next = null;

    one.random = hash;
    hash.random = one;

   /* one.next = two;
    two.next = three;
    three.next = four;
    four.next = null;

    one.random = three;
    two.random = one;
    three.random = four;
    four.random = two; */

    copyRandomList1(one);

};
/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if(head == null) return null;
    var map = {};
    var curr = head;
    var n = new RandomListNode(curr);
    var newHead = n;
    
    while(curr != null){
        map[curr] = n;
        curr = curr.next;
        n.next = new RandomListNode(curr);
        n = n.next;
    }
    curr = head;
    n = newHead;
    
    while(curr != null){
        n.random = map[curr.random];
        curr = curr.next;
        n = n.next;
    }
    console.log(newHead.label); //1    
    return newHead;
};

var copyRandomList1 = function(head) {
   if(head == null) return null;
   var curr = head;
   while(curr!=null){
        var nN = new RandomListNode(curr.label);
        nN.next = curr.next;
        curr.next = nN;
        curr = curr.next.next;
   }
   curr = head;
   while(curr != null){
    curr.next.random = curr.random.next;
    curr = curr.next.next;
   }

curr = head;
var nH = head.next;
var n = nH;

while(n.next != null){
    curr.next = n.next;
    n.next = curr.next.next;
    curr = curr.next;
    n = n.next;
}
    console.log(nH);
};
