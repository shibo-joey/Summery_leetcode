 var nums = [-1, 2, 1, -4]
 var target = 1

var threeSumClosest = function(nums, target) {
 var res = 0
 var len = nums.length
 var max = Number.MAX_VALUE

nums.sort(function(a,b) {return a - b})

 for(var i = 0; i <len - 2; i++){
   var j = i + 1
   var k = len - 1


  while(j < k){
    var sum = nums[i] + nums[j] + nums[k]
    var abs = Math.abs(target - sum)

    if(abs < max){
      max = abs
      res = sum
    }
    if(abs === 0) return sum
    if(sum < target){
      j++
    }
    else{
      k--
    }
  }
 }
 console.log(res)
 return res
}
