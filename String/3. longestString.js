s ="abcabcbb"
var lengthOfLongestSubstring = function(s) {
  var len = s.length;
  if(len <= 1)  return len;
  var first = 0;
  var last = 1;
  var result = 1;

  while(last < len){
    sub = s.slice(first, last);
    a = sub.indexOf(s[last])
    if(a != -1){
      first = first + a + 1
    }
    last++
  result = Math.max(last- first, result)

  }
  return result
}
