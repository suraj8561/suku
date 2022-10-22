var itemList=document.querySelector('#items')
var newDiv=document.createElement("div")

//add class
newDiv.className="dude"

//add id
newDiv.id= "dude1"

// add attribute
newDiv.setAttribute('title','HEllo Div') 

//create a text node
var newDivText=document.createTextNode('HEllo World')
// add text to Div
newDiv.appendChild(newDivText)
var container=document.querySelector('header .container');
var h1=document.querySelector ('header h1')
console.log(newDiv)
newDiv.style.fontSize='30px'
container.insertBefore(newDiv,h1) 