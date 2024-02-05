// by ID
// by className
// by tagName
// const heading = document.getElementByTagName('h1');
// by querySelectorAll
// const lisItems = document.querySelectorAll('#list li')
// Modifying Elements
// heading[0].innerHTML = "Learing Dom"
// heading[1].textContent = "Element Manipulate"
// heading[1].setAttribute('class','highlight');
// const button = document.getElementById('btn');
// button.style.backgroundColor = 'red';

// create elements
const container = document.getElementsByClassName('container');
const newParagraph = document.createElement('p');
newParagraph.textContent = "This is new Paragraph";
container[0].appendChild(newParagraph)

// handling events
const button = document.getElementById('btn');
button.addEventListener('click',addListItem);
function addListItem(){
    const newListItem = document.createElement('li');
    newListItem.textContent = "Wash dishes";
    document.getElementById('list').appendChild(newListItem)
}
