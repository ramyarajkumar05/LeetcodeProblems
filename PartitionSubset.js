var isSubsetSum = function( arr, n,sum)
    {
        // Base Cases
        if (sum == 0)
            return true;
        if (n == 0 && sum != 0)
            return false;
 
        // If last element is greater than sum, then ignore it
        if (arr[n-1] > sum)
            return isSubsetSum (arr, n-1, sum);
 
        /* else, check if sum can be obtained by any of
           the following
        (a) including the last element
        (b) excluding the last element
        */
        return isSubsetSum (arr, n-1, sum) ||
               isSubsetSum (arr, n-1, sum-arr[n-1]);
    };
 
    // Returns true if arr[] can be partitioned in two
    // subsets of equal sum, otherwise false
    var findPartition = function(arr,n)
    {
        // Calculate sum of the elements in array
        var sum = 0;
        for (var i = 0; i < n; i++)
            sum += arr[i];
 
        // If sum is odd, there cannot be two subsets
        // with equal sum
        if (sum%2 != 0)
            return false;
 
        // Find if there is subset with sum equal to half
        // of total sum
        return isSubsetSum (arr, n, sum/2);
    };
 
    /*Driver function to check for above function*/
    var executePartition = function()
    {
 
        var arr= [3, 1, 5, 9, 12];
        var n = arr.length;
        if (findPartition(arr, n) == true)
            console.log("Can be divided into two "+
                                "subsets of equal sum");
        else
            console.log("Can not be divided into " +
                                "two subsets of equal sum");
    };
