/*

let a = 1234
let b = String(a)   //1234
let c = b.split('')  // [ '1', '2', '3', '4' ]
let d = c.reverse() // [ '4', '3', '2', '1' ]
console.log(Number(d.join(''))) // 4321

*/
var x = 1234
var reverse = function(x) {
    if(!x) return 0
    if(x < -1*(2**31) || x > (2**31 -1)) return 0
    var result = (x > 0 ? 1 : -1)* Number(String(Math.abs(x)).split('').reverse().join(''))
    if(result < -1*(2**31) || result > (2**31 -1)) return 0
   
    return result
};
