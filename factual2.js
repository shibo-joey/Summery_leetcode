var a = [[-4,3], [-2,1], [1,0], [3,2]]
var len = a.length
var xsum = 0
var ysum = 0
for(let i = 0 ; i < len; i++){
   xsum = xsum + a[i][0]
   ysum = ysum + a[i][1]
}
  var xaver = xsum/len
  var yaver = ysum/len

var xtotal = 0
var ytotal = 0
  for(let j = 0; j < len ; j++){

    xtotal = xtotal + Math.abs(a[j][0] - xaver)
    ytotal = ytotal + Math.abs(a[j][1] - yaver)
  }
  var total = xtotal + ytotal
  console.log(total)
