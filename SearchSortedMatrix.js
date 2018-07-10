/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var matrix = [[1,3]];
var searchMatrix = function(target) {
    if(matrix == null || matrix.length == 0 ) return false;
    var m = matrix.length;
    var n = matrix[0].length;
    var low = 0;
    var high = matrix.length-1;
    while(low <= high){
        var mid = Math.floor((low + high)/2);
        if(matrix[mid][0] == target)
            return true;
        else if(matrix[mid][0] < target){
            if(matrix[mid][n-1] > target)
                return binarySearch(matrix[mid], target);
            else if(matrix[mid][n-1] < target)
                low = mid+1;
            else
              return true;
        }
        else
            high = mid-1;
    }
    return false;
};

var binarySearch = function(array, target){
  var low = 0;
  var high = array.length-1;
  while(low <= high){
      var mid = Math.floor((low + high)/2);
      if(array[mid] == target)
          return true;
      else if(array[mid] > target)
          high = mid - 1;
      else
          low = mid + 1;
          
  }
    return false;
};