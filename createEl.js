//create element
const li = document.createElement('li');

//add class
li.className = "collection-item";

//add id
li.id = "new-item";

//add attribute
li.setAttribute("title", "New Item");

//add text node and append
li.appendChild(document.createTextNode('Hello World')); //appendChild means you want to put something(text) in an element

//append li as child to ul
document.querySelector('ul.collection').appendChild(li);

//create new link element
const link = document.createElement('a');

//add classes
link.className = "delete-item secondary-content";

//add attribute
link.setAttribute('href', '#');

//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

//append link to li
li.appendChild(link)

//append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);

