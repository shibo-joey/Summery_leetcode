var s = "babad"
var longestPalindrome = function(s) {
  var max = ""
  for(let i = 0; i < s.length; i++){
    for(let j = 0; j < 2; j++){
      left = i
      right = i + j
      while(s[left] && s[left] === s[right]){
        left --
        right++
      }
      if(right - left - 1 > max.length){
        max = s.substring(left + 1, right)
      }
    }
  }
  return max
}
