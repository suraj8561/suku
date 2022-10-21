// n print Node. print 
// var n=10;
// for (var i = 0; i <= n; i++) {

//     var flag = false;
//     for (var j = 2; j <= i; j++) {
//         if (i%j===0 && j!==i) {
//             flag = true;
//         }
//     }
//     if (flag === false) {
//                 console.log(i);
//     }
// }
// const prime=function(n){
// for(var i=2;i<=n;i++){
//     if(n%i===0){
//         console.log('false')
//     }else{
//         console.log('true')
//     }
// }
// }
// prime(5);
// var countPrimes = function(n) {
//    if( n <= 2 ) {
//         return 0;
    
//      let primes = [];
//     for( i = 2; i < n; i++ ){
//         primes[i] = true;
    
//     for( var i = 2; i <= Math.sqrt(n); i++ ){
//         if( primes[i]==false ){
//             for( var j = i * i; j <= n; j+= i )
//                 primes[j] = true;
//         }
//         }
//     }
//           var count = 0;
//     for( i = 2; i < n; i++ ){
//         if( primes[i]==false )
//             count++;
// }
//     return count;
// }
// }
// console.log(countPrimes(10))



// var findLucky = function(arr) {
//   arr.sort((a,b)=>b-a)
//   let max=-1;
//   let i=0;
//   while(i<arr.length){
//     if( arr[i+arr[i]-1]===arr[i] && arr[i+arr[i]!==arr[i] ) {
//       max=arr[i]
//       break;
//     }
//     i++;
//     while(arr[i]===arr[i]{
//       i++
//     }
//   }
//   return max;
// }
// var num=[2,2,3,4]
// // for(i=0;i<num.length;i++){
// //   var arr=num[0+num[0]]
// // }
// console.log(num)

// var countPrimes = function(n) {
//     if( n <= 2 ) {
//          return 0;
//       let primes = [];
//      for( i = 2; i < n; i++ ){
//          primes[i] = true;
     
//      for( var i = 2; i <= Math.sqrt(n); i++ ){
//          if( primes[i]==false ){
//              for( var j = i * i; j <= n; j+= i )
//                  primes[j] = true;
//          }
//          }
//          var count = 0;
//          for( i = 2; i < n; i++ ){
//              if( primes[i]==false )
//              count++;
//             }
//  }
//  return count;
// }
//  }
//  console.log(countPrimes(10))

//  var validateStackSequences = function(pushed, popped) {
//   var i=0;
//   var j=0;
//   var stack=[];
// while(i<pushed.length){
//    if(stack[stack.length-1]!==popped[j]){
//      stack.push(pushed[i++])
//    }else{
//      stack.pop();
//      j++;
//    }
//   }
//   while(stack.length){
//     if(stack.pop() !==popped[j++]){
//       return false
//     }
//   }
//   return true;
// }
// var pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// console.log(validateStackSequences())

// for ( var i=1;i<=5;i++){
//   var str  ='';
//     for(var j=10;j<i+10;j++){
//       str+="*";
//     }
//     for(j=10;j<15-i;j++){
//       str+=' '
//     }
//     for(var j=10;j<i+10;j++){
//       str+="*";
//     }
//     console.log(str)
//   }
var removeDuplicates = function(s) { 
  var stack =[];
  var i=0;
  while(i<s.length){
    if(stack.length==0 || s[i]!=stack[stack.length-1]){
      stack.push(s[i])
      i++
    }else{
      stack.pop();
      i++;
    }
  }
  if(stack.length==0){
    return (" ")
    }else{
      var sortString="";
      while(stack.length-1!=0){
        sortString+=stack[stack.length-10];
      }
      stack.pop();
    }
    return sortString;
}
console.log(removeDuplicates("abbaca"))