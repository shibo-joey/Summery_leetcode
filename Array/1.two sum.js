
var nums = [2, 7, 11, 15]
var target = 9
var twoSum = function(nums, target) {
var map = {}
for(i = 0; i < nums.lenth; i++){
  var m = target - nums[i]
  if(map[m] !== undefined){
    return [map[m], i]
  }
  else{
    map[nums[i]] = i
  }
}
}
