 // Activity 1: Selecting and Manipulating Elements
 document.getElementById('myElementId').textContent = 'New Text Content';
 document.querySelector('.myElementClass').style.backgroundColor = 'lightblue';

 // Activity 2: Creating and Appending Elements
 const newDiv = document.createElement('div');
 newDiv.textContent = 'This is a new div element';
 document.body.appendChild(newDiv);

 const newListItem = document.createElement('li');
 newListItem.textContent = 'New list item';
 document.querySelector('ul').appendChild(newListItem);

 // Activity 3: Removing Elements
 const elementToRemove = document.getElementById('elementToRemove');
 if (elementToRemove) {
   elementToRemove.remove();
 }

 const specificElement = document.querySelector('.myList');
 if (specificElement.lastElementChild) {
   specificElement.removeChild(specificElement.lastElementChild);
 }

 // Activity 4: Modifying Attributes and Classes
 const imageElement = document.querySelector('img');
 imageElement.setAttribute('src', 'new-image.jpg');
 imageElement.setAttribute('alt', 'image');

 const elementWithClass = document.querySelector('.myElement');
 elementWithClass.classList.add('newClass');
 elementWithClass.classList.remove('oldClass');

 // Activity 5: Event Handling
 const button = document.querySelector('#myButton');
 button.addEventListener('click', () => {
   document.querySelector('#myParagraph').textContent = 'Text changed on button click!';
 });

 const hoverElement = document.querySelector('.hoverElement');
 hoverElement.addEventListener('mouseover', () => {
   hoverElement.style.borderColor = 'red';
 });