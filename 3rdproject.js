// // EXAMINE THE DOCUMENT OBJECT 
// console.dir(document);
// console.log(document.domain)
// console.log(document.URL);
// console.log(document.title);
// // document.title='123'
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10]=Hello
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID 
// console.log(document.getElementById(header-title))
// var headerTitle=document.getElementById(header-title);
// var header=document.getElementById(main-header);
// console.log(headerTitle)
// headerTitle.textContent='hello'
// console.log(headerTitle.innerText)
// headerTitle.innerHTML=<h3>Hello</h3>
// headerTitle.style.borderBottom='solid 3px #000'
// header.style.borderBottom='solid 3px #000'

// // GET ELEMENT BY CLASS NAME 
// var items=document.getElementsByClassName('list-group-item');
// console.log(items)
// console.log(items[1])//position of items index
// items[1].textContent='Hello-2'
// items[1].style.fontWEight='bold'
// items[1].style.backgroundcolor='yellow'


// // Give ERROR 
// // items.style.backgroundcolor='#f4f4f4'
// for(var i=0;i<Items.length;i++){
// items[1].style.backgroundcolor='#f4f4f4'
// }

// // get element by tag name 
// var li=document.getElementsByTagName('li');
// console.log(li)
// console.log(li[1])//position of items index
// li[1].textContent='Hello-2'
// li[1].style.fontWEight='bold'
// li[1].style.backgroundcolor='yellow'


// for(var i=0;i<li.length;i++){
//     li[1].style.backgroundcolor='#f4f4f4'
// }

// QuerySelector 
// var header=$('#mian-header')
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #abc'

// var input=document.querySelector('input')
// input.value='Hello world'

// var submit=document.querySelector('input[type="submit"]')
// submit.value="SEND"

// var item=document.querySelector('.list-group-item')
// item.style.color="blue"// for first item

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='red'

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='green'

// QuerySelectorAll

// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent="Suraj"

// var odd=document.querySelectorAll('li:nth-child(odd)')
// var even=document.querySelectorAll('li:nth-child(even)')
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='#f4f4f4'
//     even[i].style.backgroundColor='#ccc'
// }

// TRAVERSING DOM 
var itemList=document.querySelector('#items')
//parentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor='#ccc'
// console.log(itemList.parentNode.parentNode.parentNode.parentNode)

// parentElement
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor='#ccc'
// console.log(itemList.parentElement. parentElement.parentElement.parentElement)

// childNode 
// console.log(itemList.childNodes )
// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor='yellow'
// itemList.children[1].style.color='green'
// // firstChild 
// console.log(itemList.firstChild);
// //firstElementChild 
// console.log(itemList.fisrtElementChild);
// itemList.fisrtElementChild.textContent="Hello 1"

// lastChild 
// console.log(itemList.lastChild);
// //lastElementChild 
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="Hello 2"
 
//  fisrtElementChild

// nextsibling
// console.log(itemList.nextSibling)
// // nextElementSibling 
// console.log(itemList.nextElementSibling)

// previoussibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color="blue"

// createelement

// create a div 
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
var container=document.querySelector('li .container');
var h1=document.querySelector ('li h2')
console.log(newDiv)
newDiv.style.fontSize='10px'
container.insertBefore(newDiv,h2)