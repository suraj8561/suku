// var x=7;
// function getName(){
//     console.log("Namaste javascript")
// }
// getName()
// console.log(x)

// var a = 3;
// function printName(name){
// console.log(name)
// }
// printName("YAVTECH");
// console.log(a)


// getName()
// console.log(x)

// var x=7;
// function getName(){
//     console.log("Namaste javascript")
// }


// printName("YAVTECH");//=>YAVTECH
// console.log(a);//=>undefined

// var a = 3;
// function printName(name){
// console.log(name)
// }

// console.log(printName());//=>printName is not a function it is variable so cant 
// console.log(a);

// var a = 3;
// var printName = (name) => {
// console.log(name)
// }


// console.log(printName);
// console.log(a);

// var a = 3;
// var printName = function (name) {
// console.log(name)
// }

// console.log(printName);
// console.log(a);


// //  var a=5
// var printName = function (name) {
// console.log(name)
// }

//SHORTEST JS Program 🔥window & this keyword 
// // What will be the output of the following (Also write the reason for the answer)
// var a = 2;
// var c = 2;
// console.log(this.a);//output and reason=>2(a is  in globle space and these variable and function get  attech into globle object)

// function b(){
// var x = 2;
// var c = 4
// console.log(c)
// }

// console.log(a);//output and reason=>2(a is  in globle space and these variable and function get  attech into globle object)
// console.log(this.c)//output and reason=>2(c is  in globle space and these variable and function get  attech into globle object)
// console.log(this.x)//output and reason=>undefined(x is not in globle space and these variable and function get not attech into globle object)
// console.log(window.a)//output and reason=>2(a is  in globle space and these variable and function get  attech into globle object)
// console.log(window.x)//output and reason=>undefined (x is not in globle space and these variable and function get not attech into globle object)
// console.log(b());//output and reason=>4(b is  in globle space and these variable and function get  attech into globle object)

// function abc() {
//     console.log(a);
//     }
//     var a = 7;
//     abc();
    
// function abc() {
//     console.log(a);  
//     }

//     abc();
//     var a = 7;
    
// function outerfunction() {
//     console.log(a); //=> out put 7 
//     var c = 10;
//     innerfunction();
//     function innerfunction() {
//     console.log(b);//=> out put 3
//     console.log(c);//=> out put 10
//     } 
//     } 
//     var a = 7;
//     var b =3
 
//     outerfunction();
    
// function outerfunction() {
//     console.log(a);//=>undefined
//     var a = 10;

//     innerfunction();
//     function innerfunction() {
//     console.log(a); //=>output 10
//     console.log(window.a); //=>window is not defined 
//     console.log(this.a);//=>this is not defined 
//     }
//     } 
//     var a = 7; 
//     var b =3

//     outerfunction();
    
    // let, var and const 
    
    // // QUESTION 1
    // console.log(a)//=>ReferenceError: Cannot access 'a' before initialization(try to access in temparal red zone it gives you reference error in case of variable is let and const are declarations are hoisted )'temparal red zone means before a is initialization for only a'
    // console.log(b);//=> repalce holder undefined
    // let a = 5;
    // var b =6;
    // console.log(b);//=>6
    // let a =10;
    // let a =100;

    // QUESTION 3



    // console.log(a);//=>repalce holder undefined
    // var a = 5;
    //  console.log(b) //we havent initialized b, Guess the output ReferenceError: b is not defined
    // let a = 5;
    // var b = 6;

    // console.log(this.b);//=>6 (var is globle variable so its give output)
    // console.log(window.b)//=>6 (var is globle variable so its give output)
    // console.log(window.a)//=>undefined (let is manage its separate memory so its give undefined)
    // console.log(this.a);//=>undefined (let is manage its separate memory so its give undefined)
    //  var obj={
    //     key1:'value',
    //     key2:'value1',
    //     key3:'value2'
    //  }
    //  var arr=['value','value1']
    //  Object.keys(obj).forEach(key=>{
    //     console.log(obj[key])
    //  })
    
//     console.log('a');
// console.log('b');
// setTimeout(()=> console.log('c'), 1000);
// console.log('d');

// console.log('a');
// console.log('b');
// setTimeout(()=> console.log('c'), 1000);
// setTimeout(()=> console.log('c'), 0);
// console.log('d');
// function getMobile(manufacturer, model, year) {
//     return {
//        manufacturer,
//        model,
//        year
//     }
//  }
//  console.log(getMobile("Samsung", "Galaxy", "2020"));
// var asyncCall =  new Promise((resolve, reject) => {
//     // do something
//     resolve();
//  }).then(()=> {   
//     console.log('DON!');
//  })

// var a = 50;
// {
// var a =30;
// let b = 20;
// let c = 30;
// }
// console.log(a)



// const a = 50;
// {
// var a =30;
// let b = 20;
// let c = 30;
// }
// console.log(a)
// let b = 50;
// {
// var a =30;
// let b = 20;
// let c = 30;
// console.log(a)
// }
// console.log(b)
// var a = 50;
// function fun(){
// var a =30;
// let b = 20;
// let c = 30;
// }
// fun();
// console.log(a)
// let a = 50;
// function fun(){
// var a =30;
// let b = 20;
// let c = 30;
// }
// fun();
// console.log(a)
// const a = 10;
// {
// var a = 10;
// }
// console.log(a)
// const a = 10;
// {
// const a = 20;
// {
// const a = 50;
// console.log(a);
// }
// console.log(a)
// }
// console.log(a)

// const a = 10;

// {

// const a = 20;

// {

// console.log(a);

// }

// console.log(a)

// }

// console.log(a)
 
// Closures in JS
// function x(){
//     let a = 10;
//     function y(){ 
//     console.log(a);
//     }
//     y() 
//     }
//     x();

// function x(){
//     let a = 10;
//     function y(){ 
//     console.log(a);
//     }
//  return y 
//     }
//    var z= x();
//    console.log(z) // its return y function 
//    z(); // return output which is assign 10

// function x(){
//     let a = 10;
//     return function y(){ 
//     console.log(a);
//     }
//     }
//     var z=x();
//     console.log(z)
//     z();

// function x(){
//     let a = 10;
//     function y(){  
//     console.log(a);
//     }
//     return y(); 
//     }
//     x();
//   function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }   
//     return y;
// }
//     console.log(x());//ƒ y(){ console.log(a); }
// function x(){
//     let a = 10;
//     function y(){ 
//     console.log(a);
//     }
//     return y; 
//     }
//     const z = x()
//     console.log(z());

// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     a= 50;
//     return y;
//     }
//     const z = x()
//     console.log(z());

// var sum= function(a){
//     console.log('Practice question '+a)
//     var c=5;
//     return function(b){
//         return a+b+c
//     }
// }
//    const store= sum(2);
//    console.log(store(4))    

// var sum = function(a,b,c){
//     return {
//         getSumTwo:function(){
//             return a+b ;
//         },
//         getSumThree:function(){
//             return a+b+c
//         }
//     }
// }
// const store=sum(3,4,5)
// console.log(store.getSumTwo())
// console.log(store.getSumThree())
// function counterwrapper(){
//     let count =0;
//     return function(){
//      count++
//     //    console.log(count)
//     return count
//     }
// }
// const updateCount=counterwrapper()
// console.log(updateCount())           
// console.log(updateCount())       
// let count=0 ;
// function counter(){
//     count++
//     console.log(count)
// }    
// counter()
// counter()
// counter()

// function cardCounter(){
// let _count=0;
// function  _updateCountt(val){
// _count+=val
// }
//     return{
//         increament(){
//             _updateCountt(1)
//         },
//         decreament(){
//             _updateCountt(-1)
//         },
//         value(){
//             return _count
//         }
//     }
// }
// const cartCounter=cardCounter()
// cartCounter.increament()
// cartCounter.increament()
// cartCounter.increament()
// cartCounter.decreament()
// console.log(cartCounter.value())


// Understand Call Apply and Bind 
// 1
// obj ={num:2}
// var addToThis=function(a){
//     return this.num+a ;
// }
// const Add=addToThis.call(obj,5)
// console.log(Add)

// // 2
// const arr=[10]
// const Add1=addToThis.apply(obj,arr)
// console.log(Add1)
// // 3
// obj ={num:2}
// var addToThis=function(a){
//     return this.num+a ;
// }
// const bound=addToThis.bind(obj)
// console.log(bound(10))

// // 4
// var student ={
//     age:20
// }
// function print(){
//     return this.age
// }
// const result=print.bind(student)
// console.log(result())


// Advance closures 
// 1)

// function y(){
//     var a=10
// setTimeout(() => console.log(a), 1000)
// console.log('Done Coding')
// }
// y(); //==>first set timer take the callback function then when the timer expire then execute that javaScript doesNot wait for that so print Dove Coding first.


 
// 2)
// function y(){
// setTimeout(() => console.log(a), 0)
// console.log('Done Coding')
// }
// y();

// 3)

// function y(){
// for(var i=1;i<=5;i++){
// setTimeout(() => console.log(i ), i * 1000)
// }
// console.log('Done Coding')
// }
// y();

// function y(){
// for(let i=1;i<=5;i++){
// setTimeout(() => console.log(i ), i * 1000)
// }
// console.log('Done Coding')
// }
// y();

// function y(){
// for(var i=1;i<=5;i++){
// function close(i){
//     setTimeout(() => console.log(i ), i * 1000)
// }
// close(i)
// }
// console.log('Done Coding')
// }
// y();

// function y(){
//     for(var i=0;i<6;i++){
//         console.log(i)
//     }
// }
// y()

// var count=0
// const name = (arr)=>{
//     if(count===0){
//         return ()=>{
//             console.log('Hello '+ arr[count])
//             count++
//         }
//     }else{
//         return()=>{
//             console.log('Hello '+ arr[count])
//         }
//     }
// }
// let fun = name(["Ram","Shyam"]);
// fun()// Print Hello Ram
// fun()//print Hello Shyam
// const name=(arr)=>{
//     let count=0;
//     return ()=>{
//         console.log('Hello '+arr[count])
//         count++
//     }
// }
// let fun=name(['Ram',"Shyam"])
// fun()
// fun()

// FIRST CLASS FUNCTIONS 🔥ft. Anonymous Functions


// a()//('inside a')
// b()// b is not function type error
// //function statement
// function a(){
// console.log('inside a');
// }
// //function expression
// var b = function (){
// console.log('inside b');
// }
 // function declaration it also function statement 

 // Anonymous function // function without name 
//  function () {
//     console.log("hello")
//  }

//named function expression 
// var b = function xyz(){
//     console.log('inside b');
//     }
//     b();
//     xyz();

// different between argument and perameter 
// var b= function (param1,param2){

// }
// b(2,3)//2 and 3 passing the value in function are argument and param1 , param2 (lable)are parameter

// First class function the ability to use like value function as well as use as knons as first class function .and pass the agrument to the another function can be return fron the function is this ability is know as irst class function . it is programmig concept of all progamming languages.
// var b = function (a){
//         return function (){

//         }
//         }
//        console.log(b())
    

// currying in javaSCript 
// function a(x){
//     return (b)=>{
//        console.log(x+b)
//     }
// }
// const z=a(10)
// console.log(z(5))
// a(5)(10)
function makeTea(){
    console.log("milk added")
    return ()=>{
        console.log('boild milk')
        return ()=>{
            console.log('add tea leaves')
            return ()=>{
                console.log("let's take a tea")
            }
        }
    }
}
makeTea()()()()