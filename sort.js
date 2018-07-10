var mergeKlists = function(a,b,c){
	var array = [];
	while(a!=null || b!=null !! c!=null){
		if(a.val < b.val && b.val < c.val){
			min =  a.val;
			a = a.next;
			array.push(min);
		}
		else if(b.val > c.val){
			min = c.val;
			c=c.next;
			array.push(min);
		}
		else{
			b=b.next;
			array.push(min);
		}
	}

}

//////////////////////////////////////
public void mergeLists(final int[]a, final int[]b, final int[]c){
	int maxLength = findMaxSizeArray(a,b,c);
	int merged[] = new int[maxLength ];
	for(int i=0,j=0,k=0;i<maxLength;i++,j++,k++){
		merged[i++] = findMin(a[i],b[j],c[k]);
	}


}

private int findMin(int a, int b, int c){
	//TODO This needs to be optimized using a priority Queue
	return Math.min(a,Math.min(b,c));

}
///////////////////////////////
public class ListNode {
      int val;
      ListNode next;
      ListNode(int x) { val = x; }
}

public class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if(lists == null || lists.length == 0)
            return null;
       // ListNode result = new ListNode(-1);
       ListNode result = null;
        boolean flag = false;
        Comparator<ListNode> lnCompare = new Comparator<ListNode>() {
            @Override
            public int compare(ListNode l1, ListNode l2){
                return l1.val - l2.val;
            }
        };
        
        Queue<ListNode> heap = new PriorityQueue<ListNode>(lists.length, lnCompare);
        for(int i=0; i<lists.length; i++) {
            if(lists[i] !=null) heap.add(lists[i]);
        }
        
        ListNode head = result;
        while(heap.peek() != null) {
            ListNode node = heap.poll();
            result.next = node;
            result = result.next;
            if(node.next != null) heap.add(node.next);
        }
        return head.next;
    }    
   
}
////////////
https://codepad.remoteinterview.io/UHTDKTUGWV

https://codepad.remoteinterview.io/NZCYQURNCJ

https://codepad.remoteinterview.io/LCZBVDAHQS
