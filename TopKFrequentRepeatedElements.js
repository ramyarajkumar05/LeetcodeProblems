/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var res=[];
    var map={};
    var bucket = [];
    if(nums == null || nums.length<=0 ) return null;
    // populate the map with key as the element and the value as the no. of times the element has occurred.
    for(var i=0;i<nums.length;i++){
        if(map[nums[i]] == null) 
            map[nums[i]] = 1;
        else
            map[nums[i]] = map[nums[i]] + 1;
    }
    // populate an array of arrays, where each index represents the no. of occurrences and the value at that index is an array with the elements that has occurred index no. of times. Eg. index 5 has values 2 and 4 implies that element 2 and 4 are repeated 5 times.
    for(var key in map){
        if(bucket[map[key]] == null)
            bucket[map[key]] = [key];
        else
            bucket[map[key]].push(key);            
    }
    //Maximum repeated elements will be from highest to lowest index (from end to start) in the bucket array. Simply push k values from the end to the result array.
    for(var i=bucket.length; i>=0; i--){
        if(bucket[i] != null && bucket[i] != undefined ){
            for(var j=0; j< bucket[i].length; j++){
                if(res.length < k)
                    res.push(parseInt(bucket[i][j]));
                else
                    return res;
            }
        }
    }
};

// Using Heap method
var topKFrequent = function(nums, k) {    
    var map={};
    var heap = [];
    if(nums == null || nums.length<=0 ) return null;
    // populate the map with key as the element and the value as the no. of times the element has occurred.
    for(var i=0;i<nums.length;i++){
        if(map[nums[i]] == null) 
            map[nums[i]] = 1;
        else
            map[nums[i]] = map[nums[i]] + 1;
    }
    // Insert 1st k-1 elements in the Heap
    var curr = 0;
    for(var key in map){
        if(curr < k) {
            insert(key,heap,map);
            curr++;
            continue;
        }
        var min = heap[0];
        if(map[key] > map[min]){
            removeMin(heap,k, map);
            insert(key,heap,map);
        }
        else if(map[key] == map[min] && key > min){
            removeMin(heap,k, map);
            insert(key,heap,map);
        }
        curr++;        
    }  
    console.log(heap.toString());
    return heap[0];
}

// Heap common functions
var insert = function(val, arr,map){
    arr.push(val);
    upheap(arr,arr.length-1,map);
}
var upheap = function(arr, index,map){    
    var temp = 0;
    while(index > 0){
        var parentIndex = parent(index);
        if(map[arr[parentIndex]] > map[arr[index]]){
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
var removeMin = function(a,k,map){
    var min = minHeap(a);
    a[0] = a[a.length-1];
    a.pop();
    downheap(a,0,k,map);
}

var downheap = function(a, index,k,map){
    var temp=0;
    var smallest = index;
    var leftIndex = left(index);
    var rightIndex = right(index);
    if(leftIndex<a.length && map[a[leftIndex]] < map[a[smallest]]){
        smallest = leftIndex;
    }
    if(rightIndex<a.length && map[a[rightIndex]] < map[a[smallest]]){
        smallest = rightIndex;
    }
    if(index!=smallest){
        temp = a[index];
        a[index] = a[smallest];
        a[smallest] = temp;
        downheap(a,smallest,k,map);
    }
}
var left = function(i){
    return 2*i+1;
}
var right = function(i){
    return 2*i+2;
}
var parent = function(i){
    return Math.floor((i-1)/2);
}