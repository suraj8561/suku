var lastItem=document.querySelector('.list-group-item:nth-child(2)');
lastItem.style.color='green'

var odd=document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#f4f4f4'
   
}