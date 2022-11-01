// what is the call back function in javaScript ? 
// setTimeout(function (){
//     console.log("timer");
// },5000)
// function x(y){
// console.log("x")
// y();
// }
// x(function y(){
//     console.log("y")
// })
// call back function x and inside x also y function is over here is call back function
function attechEventListener(){
    let count=0
document.getElementById("clickMe").addEventListener("click", function xyz()
{console.log("Bottom is shown", ++count);
})  
}
attechEventListener()
