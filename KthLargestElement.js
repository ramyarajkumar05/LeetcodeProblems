/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest1 = function(nums, k) {
    k = nums.length - k;
    //console.log(k);
    return QS(nums,0,nums.length-1,k);    
};
var QS = function(nums,low,high,k){
    console.log("low :"+low +" ;high: "+high);
    if(low >= high) return;
    var pos = partition(nums,low,high);
    console.log(pos);
    if(pos == k)
        return nums[pos];
    else if(pos < k){
        console.log("pos is "+pos);
        console.log("k is "+k);
         return QS(nums,pos+1,high,k);
    }
    else{
        console.log("blah");
         return QS(nums,low,pos-1);
    }
}
var partition = function(nums,low,high){
    var pos = low;
    var temp = 0;
    var pivot = nums[high];
    for(var i=low ; i<= high; i++){
        if(nums[i] < pivot){
            if(i!=pos){
              temp = nums[i];
              nums[i] = nums[pos];
              nums[pos] = temp;
            }
            pos++;
        }
    }
    temp = nums[pos];
    nums[pos] = nums[high];
    nums[high] = temp;
    return pos;
}
// Kth largest using min heap
var findKthLargest = function(arr, k){
    var heap = [];
    for(var i=0;i<k;i++){
        console.log("inserting "+arr[i] +"into heap");
        insert(arr[i], heap);
    }
    console.log(heap.toString());
    
    for (var i = k; i<arr.length; i++) {
        var min = heap[0];
        if(arr[i] > min){
            removeMin(heap,k);
            //console.log(heap.toString());
            insert(arr[i],heap);
            console.log(heap.toString());
        }
    }
    console.log("Kth largest is "+heap[0]);
    return heap[0];
};

var left = function(i){
    return 2*i+1;
}
var right = function(i){
    return 2*i+2;
}
var parent = function(i){
    return Math.floor((i-1)/2);
}
var minHeap = function(arr){
    return arr[0];
}
var insert = function(val, arr){
    arr.push(val);
    upheap(arr,arr.length-1);
}
var upheap = function(arr, index){    
    var temp = 0;
    while(index > 0){
        var parentIndex = parent(index);
        if(arr[parentIndex] > arr[index]){
            temp = arr[parentIndex];
            arr[parentIndex] = arr[index];
            arr[index] = temp;
            index = parentIndex;
            console.log("Upheaped" +arr.toString());
        }
        else{
            break;
        }
    }
}

var removeMin = function(a,k){
    var min = minHeap(a);
    a[0] = a[a.length-1];
    a.pop();
    downheap(a,0,k);
    //return a[0];
}

var downheap = function(a, index,k){
    var temp=0;
    var smallest = index;
    var leftIndex = left(index);
    var rightIndex = right(index);
    if(leftIndex<a.length && a[leftIndex] < a[smallest]){
        smallest = leftIndex;
    }
    if(rightIndex<a.length && a[rightIndex] < a[smallest]){
        smallest = rightIndex;
    }
    if(index!=smallest){
        temp = a[index];
        a[index] = a[smallest];
        a[smallest] = temp;
        downheap(a,smallest);
    }
}