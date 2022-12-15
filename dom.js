//parentElement
// const itemList = document.querySelector('#items');
// itemList.parentElement.style.backgroundColor ='#f4f4f4'

//firstChild
// console.log(itemList.firstChild);

//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1'

//last child
// console.log(itemList.lastChild);

//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
// console.log(itemList.nextSibling);

//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//createElement

//Create a div
// var newDiv = document.createElement('div');

//Add Class
// newDiv.className = 'hello';

//Add id
// newDiv.id = 'hey';

//Add attribute
// newDiv.setAttribute('title','hiiii')

//Create a textNode
// var newDivTextNode = document.createTextNode('Hello India');

//Append to newDiv
// newDiv.appendChild(newDivTextNode);

// console.log(newDiv);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv,h1);

var helloDiv = document.createElement('div');
var helloDivTextNode = document.createTextNode('Hello');
helloDiv.appendChild(helloDivTextNode);

var helloContainer = document.querySelector('header div');
var h11 = document.querySelector('header h1');
helloContainer.insertBefore(helloDiv,h11);


var helloLi = document.createElement('li');
helloLi.className = 'list-group-item';
helloLi.appendChild(helloDivTextNode);

var listContainer = document.querySelector('ul');
console.log(listContainer)
var li = document.querySelector('ul li');
console.log(li)
listContainer.insertBefore(helloLi,li);
