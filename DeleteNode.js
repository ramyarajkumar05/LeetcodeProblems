// Delete a node, given access to only that node. You won't be asked to delete the tail pointer.
function ListNode(val) {
    this.val = val;
        this.next = null;
  }
var executeDeleteNode = function(){
	var one = new ListNode(1);
    var two = new ListNode(2);
    var three = new ListNode(3);
    var four = new ListNode(4);
    var five = new ListNode(5);

    one.next = two;
    two.next = three;
    three.next = four;
    four.next = five;
    five.next = null;

    deleteNode(five);
    console.log(one);

};
var deleteNode = function(node) {
    if(node!==null){       
   		node.val = node.next.val;
    	node.next=node.next.next;
    }
};