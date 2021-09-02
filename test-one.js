let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

//get child nodes
val = list.childNodes;

//get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = "Hello";

//children of children
list.children[3].children[0].id = "test-link";
val = list.children[3].children[0];


//first child
val = list.firstChild;// gives first text nodes
val = list.firstElementChild;// gives first actual element instead of text nodes

//last child
val = list.lastChild;// gives last text nodes
val = list.lastElementChild;// gives last actual element instead of text nodes

//count child element
val = list.childElementCount; //gives the count of child elements

//get parent nodes
val = listItem.parentNode;
val = listItem.parentElement;

//parent of parent
val = listItem.parentElement.parentElement;

//get next sibling
val = listItem.nextSibling; //gives us text node of next sibling;
val = listItem.nextElementSibling; //gives actual sibling element instead of text node


//get previous sibling
val = listItem.previousSibling; //gives us text node of previous sibling;
val = listItem.previousElementSibling; //gives actual previous element instead of text node

//more on sibling traversing
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(val);