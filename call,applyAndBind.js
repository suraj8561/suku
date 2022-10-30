// Understand Call Apply and Bind 
// 1
obj ={num:2}
var addToThis=function(a){
    return this.num+a ;
}
const Add=addToThis.call(obj,5)
console.log(Add)

// 2
const arr=[10]
const Add1=addToThis.apply(obj,arr)
console.log(Add1)
// 3
obj ={num:2}
var addToThis=function(a){
    return this.num+a ;
}
const bound=addToThis.bind(obj)
console.log(bound(10))

// 4
var student ={
    age:20
}
function print(){
    return this.age
}
const result=print.bind(student)
console.log(result())
