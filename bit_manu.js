// task 3 
// count set bit 
// var hammingWeight = function(n) {
//     var count=0;
//     for(var i=0; i<32; i++){
//     if(((n >> i)&1)==1){
//         count = count+1;
//     }   
//     }
//     return count;
// }
// console.log(hammingWeight(5))

// task 4 alternating bit 
// var hasAlternatingBits = function(n) {
//     let x=n%2;
//     while(n){
//       var y=x;
//       n=n>>1;
//       x=n%2;
//       if(x==y){
//         return false
//       }
//     }
//       return true;
//   }
  
//   console.log(hasAlternatingBits(11))

// other way 
// var hasAlternatingBits = function(n) {
//     let prev = n % 2;
//     n = Math.floor(n / 2);
 
//     // Traverse through remaining bits
//     while (n > 0)
//     {
//         let curr = n % 2;
 
//         // If current bit is
//         // same as previous
//         if (curr == prev)
//             return false;
 
//         prev = curr;
//         n = Math.floor(n / 2);
//     }
//     return true;
// };
// console.log(hasAlternatingBits(11))
