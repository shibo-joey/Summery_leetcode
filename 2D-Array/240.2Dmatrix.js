var matrix = [[1,4,7,11,15],
[2,5,8,12,19],
[3,6,9,16,22],
[10,13,14,17,24],
[18,21,23,26,30]]
var target = 5
var searchMatrix = function(matrix, target) {
  if(!matrix) return false
  for(i=0; i < matrix.length; i++){
    if(matrix[i].includes[target] == true){
      return true
    }
  }
  return false
}
