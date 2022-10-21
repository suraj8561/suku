'use strick'
// process.stdin.setEncoding('utf-8');

// function swap(a, b) {
//     //write the code to swap two numbers inside this block
//     // let temp;
//     // temp = a;
//     // a = b;
//     // b = temp;



//     //dont change below code
//     console.log('a value is =', a);
//     console.log('b value is =', b)
// }
// ternary operator
// let num=12569;
// if(result= num%2==0 ? "even":"odd")
// console.log(result)


// let marks =45;
// if(result=marks>=40 ? "pass":"fail"){
// console.log(result)

// }
// let result=marks>=40 ? "pass":"fail"
// console.log(result)

// let result = a>b ? a : b
//     console.log(result)

// switch method 
// switch(n){
//     case 1:
//         console.log("monday");
//         break;
//         case 2:
//         console.log("tuesday");
//         break;
//         case 3:
//         console.log("wednesday");
//         break;
//         case 4:
//         console.log("thursday");
//         break;
//         case 5:
//         console.log("friday");
//         break;
//         case 6:
//         console.log("saturday");
//         break;
//         case 7:
//         console.log("sunday");
//         break;
//         default:
//         console.log("invalid");
// }

// let x = 2;
// switch (x)

// {

// case 1:

// console.log("Choice is 1")

// break;

// case 2:

// console.log("Choice is 2")

// case 3:

// console.log("Choice is 3")



// case 4:

// console.log("Choice is 4")

// break;

// default:

// console.log("Choice other than 1, 2, 3 and 4")

// break;

// }
// while loop
// let i=1;
// while(i<=n){
//     if(i%2==0)
//     console.log(i)
//     i=i+1;

// continue statement
// function print_output(n){
//     /*Print all numbers from 1 to n except the ones divisible by 5
//     use the help of continue statement to leverage this */
//     let i=1;
//     while(i<=n){
//         if(i%5==0){
//             i=i+1;
//         continue;
//         }
//         console.log(i)
//         i=i+1;
//     }
   
// }
// Write a program to print the digits of a number .
// Input:-
// N - 153 .
// output:-
// 3
// 5
// 1

// function print_digits(n){
//     /*Function to print the digits of the number n 
//         Note Print all the digits in a new line*/
//     while(n>0){
//         console.log(Math.floor(n%10))
//         n=Math.floor(n/10);
//     }
    
    
// // }
// Print the following series using while loop
// 1 4 9 16 25 36 …. n
// Input :-
// n = 49
// function print_series(n){
//     /* Print the following series 
//        1 4 9 16 25 36 to n. Note print all the numbers in a seperate line*/
// let i=1;
// while(i*i<=n){
//     console.log(i*i);
//     i=i+1;
// }   
// }
// multyplication of 5 table 
// for(let i=1;i<=10;i++){
//     console.log(i*5);
// }

// up to 10 even Node. 
// for(let i=0;i<=10;i+=2){
//     console.log(i)
// }
// Print the following series using for loop:-

// 1,8,27,64,125,216,......n
// Input
// 125
// Output :-
// 1
// 8
// 27
// 64
// 125

// Write a program to print even numbers from 1 to n except numbers which are divisible by 4. 
// Use Continue statement to avoid printing.
// for (let i=2;i<=n;i+=2){
//     if(i%4==0){
//         // i++;
//     continue;
//     }
//     console.log(i);
// }
// }

// function print_series(n,m){
//     /* Print the following series from 1 to n if m is present stop printing the series 
//            Note print all the numbers in a seperate line */
// for (let i=1;i<=n;i++){
//    if( m==i){
//        break;
//    }
//    console.log(i);
// }
// }

// function print_pattern(){
//     /* Function to print the pattern */
// for(let i=1;i<=5;i++){
//     var str="";
//    for (let j=1;j<=i;j++){
// str+="*";
// }
// console.log(str);
// }}
// function print_pattern(){
//     /* Function to print the pattern */
//     for(let i=6;i<=10;i++){
//         let str="";
//         for(let j=15;j<=25-i;j++){
//             str+="*";
//         }
//         console.log(str);
//     }
// }
// *****
// ****
// ***
// **
// *

// function print_pattern(){
// for(let i=6;i<=10;i++){
//     let str="";
//     for(let j=15;j<=25-i;j++){
//         str+="*";
//     }
//     console.log(str);
// }
// for(let i=1;i<=5;i++){
//     let str="";
//     for(let j=1;j<=i;j++){
//         str+="*";
//     }
//     console.log(str);
// }
// }
// *****
// ****
// ***
// **
// // *
// *
// **
// ***
// ****
// *****

// function print_pattern(){
//     /* Function to print the pattern */
// for (let i=0; i<=4; i++){
//    var str="";


//    for(let j=0;j<=i; j++){
//    str+="*";
// }
// for (let j=0;j<=3-i;j++){
//    str+=" ";
// }

//    for(let j=0;j<=i; j++){
//    str+="*";
// }
//    console.log(str);
// }
// }

// *    *
// **   **
// ***  ***
// **** ****
// **********
// console.log(Array.from('Suraj'));


// function find_maximum(arr,length){
//     /*Function to find the maximum in the array--> arr 
//     return the maximum value*/
// let max=arr[0];
// for(let i=0;i<=arr.length; i++)
//     if(max<arr[i]){

//         max=arr[i];

// }
//     console.log(max);
// }
// Write a program to store first n prime numbers in an array . After storing return the array.﻿
// function prime_numbers(n){
//     /* Function to store first n prime_numbers in an array
//     Return the array containing the prime numbers */
//     var arr = [];
//         var x = 2;
//         while (arr.length<n)
//         {
//             var flag = true;
//             for(var i=2; i<x; i++)
//             {
//             if (x%i==0)
//                 {
//                     flag = false;
//                     break;
//                 }
//             }
//         if(flag)
//         {
//             arr.push(x);
//         }
//         x=x+1;
//         }
//         return arr;
//     }

// using for loop
// function prime_numbers(n){
//     /* Function to store first n prime_numbers in an array
//     Return the array containing the prime numbers */
//     var arr = [];
       
//         for( var x=2;arr.length<n; x++)
//         {
//             var flag = true;
//             for(var i=2; i<x; i++)
//             {
//             if (x%i==0)
//                 {
//                     flag = false;
//                     break;
//                 }
//             }
//         if(flag)
//         {
//             arr.push(x);
//         }
    
//         }
//         return arr;
//     }
// function print_subarray(arr,length){
//     /*Function to print all the subarrays given in an array
//     Input arr--> array, length -->length of an array */

// for(var i=0;i<arr.length;i++){
//     for(var j=i;j<arr.length;j++){
//         var str="";
//         for(var k=i;k<=j;k++){
//             str+=arr[k];
//         }
//         console.log(str);
//     }
// }
// }
// Given an array find the maximum sum subarray. Return the maximum sum of the subarray.
// function find_maximum(arr,length){
//     /*Function to find the maximum in the array--> arr 
//     return the maximum value*/
// // var arr=[];
// var max=arr[0];
// for(var i=0;i<=arr.length;i++){
//     var sum =0;
//     for(var j=i;j<arr.length;j+=2){
//         sum+=arr[j]
//     if(sum>max){
//         max=sum;
//     }
// }
// }
//     return max;
    
// }
    
// running sum 
// var runningSum = function(nums) {
//     let ans = new Array(nums.length)
//    ans[0] = nums[0]
//    for (let i = 1; i < nums.length; i++)
//        ans[i] = ans[i-1] + nums[i]
//    return ans
   
// }

// // rotate array 
// var rotate = function(nums, k) {
    
//     for (let i = 0; i < k; i++) {
//         nums.unshift(nums.pop());
//     }
  
//     return nums;
//   };

// count number set bit 
// var hammingWeight = function(n) {
//     var count=0;
//     for(var i=0; i<32; i++){
//     if(((n >> i)&1)==1){
//         count = count+1;
        
//     }   
//     }
//     return count;
    // var count = 0;
    //  while (n)
    //  {
    //   count += n & 1;
    //   n >>= 1;
    //  }
    //  return count;
   
    
// };

// alternative bits 
// var hasAlternatingBits = function(n) {
//     var cur = n % 2;
//        n /= 2;
//        while (n > 0) {
//            if (cur == n % 2) return false;
//            cur = n % 2;
//            n /= 2;
//        }
//        return true;
// }


// other soluition 
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


// var toHex = function(num) {

//     if (num < 0)
//   {
//     num = 0xFFFFFFFF + num  + 1;
//   }

//   return num.toString(16);

// };

// console.log(toHex(-1));

// var toHex = function(num) {
//         var a =[]; 
//       var temp=Math.abs(num);
//     while(temp > 0){
//         a.push( temp%16);
//        temp=Math.floor( temp/16);
//     }
//      for(var i=a.length;i<=7;i++){
//         a.push(0);
//      }
//      var rev_a=[];
//      for(var i=7;i>=0;i--){
//         rev_a.push(a[i]);
//      }
//       if(temp<0){
//          for(i=0;i<=7;i++);
//          rev_a[i]=15-rev_a[i]
     
//       }
//        return rev_a;
// };
// console.log(toHex(-93));
// var sortByBits = function(arr) {
// arr=[];
//     var b =[];
//     for(var i=0;i<arr.length;i++){
//         var count=0;
//     }for(j=0;j<32;j++){
//         var bit=(arr[i]>>j)&1;
//         if(bit==1){
//             count+=1;
//         }
//     }
//     b.push(count);
    

// for(var i=0;i<arr.length;i++){
// console.log(arr[i]+"-->"+b[i]);
// }
// } 

// var sortByBits = function(arr) {
//     // var arr=[];
//     var a=arr.length;
//     var b =[];
//     for(var i=0;i<a;i++){
//       var count=0;
//         for(var j=0;j<32;j++){
//         var bit=(arr[i] >> j)&1;
//         if(bit==1){
//             count=count+1;
//         }
//     }
//     b.push(count);
    
// }
// for(var i=0;i<a;i++){
// console.log(arr[i]+"-->"+b[i]);
// }
// }
// sortByBits([0,1,2,3,4,5,6,7,8]);

// var sortByBits = function(arr) {
//     // var arr=[];
//     var a=arr.length;
//     var b =[];
//     for(var i=0;i<a;i++){
//       var count=0;
//         for(var j=0;j<32;j++){
//         var bit=(arr[i] >> j)&1;
//         if(bit==1){
//             count=count+1;
//         }
//     }
//     b.push(count);
// }
// // console.log(arr[i]+"-->"+b[i]);
// for (var i=0; i<a-1;i++){
//     //  var max =i;
   
//      for (var j=i+1;j<a;j++){
//          if(b[j]>b[j+1]||b[j]==[j+1] &&a[j]>a[j+1]){
//             //  max=j;
//      var temp=b[j];
//      b[j]=b[j+1];
//       b[j+1]=temp;
      
//       temp=a[j];
//       a[j]=a[j+1];
//       a[j+1]=temp;
//          }
//      }
//  }
// for(var i=0;i<a;i++)
// {
// // return arr;    
// console.log(arr[i]+"-->"+b[i]);         
// }        
// };
// var sortByBits = function(arr) {
//     // var arr=[];
//     var a=arr.length;
//     var b =[];
//     for(var i=0;i<a;i++){
//       var count=0;
//         for(var j=0;j<32;j++){
//         var bit=(arr[i] >> j)&1;
//         if(bit==1){
//             count=count+1;
//         }
//     }
//     b.push(count);
// }
// for (var i=0; i<a-1;i++){
//      for (var j=0;j<a-1-i;j++){
//          if(b[j]>b[j+1]||b[j]==[j+1] && a[j]>a[j+1]){
            
//      var temp=b[j];
//      b[j]=b[j+1];
//       b[j+1]=temp;
      
//       temp=a[j];
//       a[j]=a[j+1];
//       a[j+1]=temp;
//          }
//      }
//  }
// for(var i=0;i<a;i++){

// return arr;             
// }        
// };
// sortByBits([0,1,2,3,4,5,6,7,8,13,10]);

// console.log(x.substring(2,5));
// console.log(x.length);
// console.log(x[2]);
// var x="suraj";
// for(var i=0;i<x.length;i++){
    // console.log(x[i]);
    // }
    
    // var x ="0suraj"
    // var i =x.codePointAt('s');
// // console.log(i);
// var x = "I am a good boy. he is a good boy"
// console.log(x.split(" "));//=>[
//     // 'I',    'am',   'a',
//     // 'good', 'boy.', 'he',
//     // 'is',   'a',    'good',
//     // 'boy'
// //   ]
// console.log(x.split("."));//=>[ 'I am a good boy', ' he is a good boy' ]
// function check_armstrong(n){
//     /*Function to check whether a number is an armstrong number or not
//        Print true if yes else false */
//    var temp=n;
//    var r,sum=0;
//    while(n>0){
//        r=n%10;
    //    n=parseInt(n/10);
//        sum=sum + r*r*r ;
//    }
//    if(temp == sum){
//        console.log("ture")
//    } 
//    else{
//        console.log("false")
//    }
   
// }
// check_armstrong(153)


/* Function to return the reverse of a number n */

    // function reverse(n){

    //     let rev_num = 0;
    //         while( n < 0)
    //         {
    //             rev_num = rev_num * 10 + n % 10;
    //             n = parseInt(n / 10);
    //         }
    //         while(n > 0)
    //         {
    //             rev_num = rev_num * 10 + n % 10;
    //             n = parseInt(n / 10);
    //         }
    //         return rev_num;
    //     }
    // console.log(reverse(-35));

// var arr = [2, 5, 6, 9, -8];
// var max = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     var sum = 0;
//     for (var j = i; j < arr.length; j++) {
//         sum = sum + arr[j]
//         if (sum > max) {
//             max = sum;
//         }
//     }
// }
// console.log(max);



// rotate array 
// nums = [1,2,3,4,5,6,7], k = 3;
//   for (let i = 0; i < k; i++) {
//       // nums.unshift;
//       nums.unshift(nums.pop());
//       ;
//   }

//  console.log(nums)

// var n=15;
// var flag=1;
// while(n>0){
//  var prev = n&1;
//   curr = (n>>1)&1;
//   if(prev^curr==0){
//     flag=0;
//  console.log(false);
//   }
// n=n>>1;
// if(flag == 1){
//     console.log(true);
// }
// }
// number to hexadecimal 
// var n=93;
// var temp=Math.abs(n);
// var rev_a=[];
// while(temp>0){
//   rev_a.push(temp%16)
//   temp=Math.floor(temp/16);
  
// }
// for(var i=rev_a.length;i<=7;i++)
// {
//   rev_a.push(0);
// }
// var a=[];
// for(var i=7; i>=0; i--)
// {
//   a.push(rev_a[i]);
// }

// if(n<0){
//   for(var i=0;i<=7;i++){
//   a[i]=15-a[i];
// }
// }
// var c=1; from here  //
// for(i=7;i>=0;i--){
//   if(a[i]+c < 16){
//     a[i]=a[i]+c;
//     break;
//   }
//  temp=a[i];
//   a[i]=(a[i]+c)%16;
//   c=Math.floor((temp+c)/16);
// }  to there code problem 
// i=0;
// while(i<8 && a[i]==0){
//   i=i+1;
// }
// var ans="";
// for (j=i;j<=7;j++){
//   if(a[j]<=9){
//     ans=ans+a[j];
//   }else if(a[j]==10) {
//     ans=ans+"a";
  
//   }else if(a[j]==11) {
//     ans=ans+"b";
//   }
//   else if(a[j]==12) {
//     ans=ans+"c";
//   }
//   else if(a[j]==13) {
//     ans=ans+"d";
//   }
//   else if(a[j]==14) {
//     ans=ans+"e";
//   }
//   else if(a[j]==15) {
//     ans=ans+"f";
//   }
  
// }
// console.log(a)
// console.log(i);
// console.log(ans);