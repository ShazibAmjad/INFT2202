// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
let list = document.getElementsByTagName('ul')[0];

// ADD NEW ITEM TO END OF LIST
// Create element
var newStartItem = document.createElement('li');

// Create text node

var textNode = document.createTextNode('this is a text node');


// Add text node to element

newEndItem.appendChild(textNode);

// Add element end of list

list.appendChild(newEndItem);


// ADD NEW ITEM START OF LIST
// Create element
var newStartItem = document.createElement('li');


// Create text node
var listText = document.createTextNode('');

// Add text node to element
newStartItem.appendChild(listText);


// Add element to list
list.insertBefore(newStartItem, list.childNodes[0]);



// All <li> elements
var allListItems = document.getElementsByTagName('li');

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
// Loop through elements
// Change class to cool
let liElements = document.getElementsByTagName('li');
let index;

for (index = 0; index < liElements.length; index++){
    liElements[index].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
var heading = document.createElement('h2');

// h2 text
var headingText = document.createTextNode('Number of Items: ');

// No. of <li> elements
var numberOfItems = document.getElementsByTagName('li').length;

// Content
var headingText = document.createTextNode('Number of Items: ' + numberOfItems);

// Update h2 using innerHTML (not textContent) because it contains markup
heading.appendChild(headingText);
    document.body.appendChild(heading);