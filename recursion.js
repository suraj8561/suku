// var main=function() {
//     log(i)
//     let i=0
//   }
// function log(i){
//     if(i > 5){
//         return 0;
//     }
//     console.log(i);
//     log(i + 1);
// }
// log(1);
// //1
// // 2
// // 3
// // 4
// // 5
// function log(i){
//     if(i > 5){
//         return 0;
//     }
//     log(i + 1);
//     console.log(i);
// }

// log(1) 
// //5
// // 4
// // 3
// // 2
// // 1

// function Sum(i){
//     if(i > 6){
//         return 0;
//     }
//     // console.log(i);
//   let sum=i + Sum(i + 1);
//   return sum
// }
// console.log(Sum(1));//15

// function factorial(i){
//     if(i > 5){
//         return 1;
//     }
//     // console.log(i);
//   let sum=i * factorial(i + 1);
//   return sum
// }
// console.log(factorial(1))//120
//fibonaaci series
// function fib(n){
//     if(n==0){
//       return 0
//     }
//     if(n==1){
//       return 1
//     }
//     let sum =fib(n-1)+fib(n-2)
//     return sum;
//   }
//   console.log(fib(7))

// let arr=[];
//     permute('123','')

//   function permute( init, fin){
//     if(init.length==0){
//     arr.push(fin);
//     }
//     for(let i=0;i<init.length;i++)
//     {
//         let newfin=fin;
//        let newinit = (init.substring(0,i)+init.substring(i+1));
//        newfin = newfin+init.charAt(i);
//       permute(newinit,newfin);
//     }
//     return;
// }
// console.log(arr);