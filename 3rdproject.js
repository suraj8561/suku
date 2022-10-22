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
