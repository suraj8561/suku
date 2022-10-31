'use strict'
// UNDERSTAND THIS KEYWORD IN JAVASCRIPT 
// 1 WHAT IS THIS ?
// HOUSE 


// THIS INSIDE GLOBLE SCOPE 

this.table='window table'
console.log(this.table)
this.garage={
    table:'garage table'
}
// console.log(this.garage.table)

// THIS INSIDE AN OBJECT 

let johnsroom={
    table:'johns table'
} 
// console.log(johnsroom.table)

//THIS INSIDE A METHOD 
let johnsroom1={
    table:'johns table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
} 
// johnsroom1.cleanTable()

this.garage={
    table:'garage table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
}
// this.garage.cleanTable()

//THIS INSIDE A FUNCTION 

const cleanTable=function(){
    console.log(`cleaning ${this.table}`)
}
// cleanTable()// TypeError: Cannot read properties of undefined (reading 'table')

//CALL FUNCTION TO RESCUE 

const cleanTable1=function(){
    console.log(`cleaning ${this.table}`)
}
// cleanTable1.call(this);

const cleanTable2=function(soap){
    console.log(`cleaning ${this.table} using${soap}`)
}
// cleanTable2.call(this,'some soap');




const cleanTable11=function(soap){
    console.log(`cleaning ${this.table} using${soap}`)
}
let johnsroom12={
    table:'johns table'
} 
this.garage13={
    table:'garage table'
}
cleanTable11.call(this,'some soap')
cleanTable11.call(this.garage13,'some soap')
cleanTable11.call(johnsroom12,'some soap')


// THIS SIDE AN INNER FUNCTION 
const cleanTable112=function(soap){
    const innerFunction=(_soap)=>{
    console.log(`cleaning ${this.table} using${_soap}`)
    }
    innerFunction(soap)
}
cleanTable112.call(this,'some soap is ')

// THIS INSIDE CONSTRUCTOR 
// let createRoom=function(name){
//     this.table=`${name}s table`;
// }
// createRoom.prototype.cleanTable0=function(soap){
//     console.log(`cleaning ${this.table} using${soap}`)
// }
// let surajSroom=new createRoom('sunaksh');
// let johnGroom=new createRoom('john'); 
// surajSroom.cleanTable0 ("some sope")
// johnGroom.cleanTable0("some sope")

// THIS INSIDE CLASSES
class createRoom{
    constructor(name){
    this.table=`${name}s table`;
    }
    cleanTable0=function(soap){
            console.log(`cleaning ${this.table} using${soap}`)
    }
} 
let surajSroom=new createRoom('sunaksh');
let johnGroom=new createRoom('john'); 
surajSroom.cleanTable0 ("some sope")
johnGroom.cleanTable0("some sope")