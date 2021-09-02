let val;
val = document;
val = document.all;
val = document.all[5];
val = document.all.length;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;
val = document.scripts;

let scripts = document.scripts;
let scriptsArr = Array.from(scripts) //converting to array
scriptsArr.forEach(function (script) {
    console.log(script.getAttribute("src"));
})



console.log(val)


//DOM selectors
document.getElementById("task-title") //returns the element with id "task-title"
document.getElementById("task-title").id // returns the id
document.getElementById("task-title").className //returns the class

const taskTitle = document.getElementById("task-title");

//change styling
taskTitle.style.background = "blue";
taskTitle.style.color = "red";
taskTitle.style.padding = "12px";

//change content
taskTitle.textContent = "Tasks List";
taskTitle.innerText = "Tasks";
taskTitle.innerHTML = '<span style="color: yellow;">Task List</span>';

//querySelector
document.querySelector('#task-title'); //selects element with id of task-title
document.querySelector('.card-title'); //selects element with class of card-title
document.querySelector('h5'); //selects the frist h5 element
document.querySelector('li').style.color = 'red'; //changes the frist li element color to red
document.querySelector('li:last-child').style.color = 'blue'; //changes the last li element color to blue
document.querySelector('li:nth-child(3)').style.color = 'yellow'; //changes the third li element color to yellow
document.querySelector('li:nth-child(4)').textContent = 'Hello world!'; //changes the fourth li element color to hello world
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; //changes the first odd number li element background to grey
document.querySelector('li:nth-child(even)').style.background = '#eee'; //changes the first even number li element background to light-grey

//selecting multiple 

//getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items);
items[0].style.color = "purple";

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

//getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'green';
lis[3].textContent = 'Hello';

lis = Array.from(lis);
// lis.reverse();
lis.forEach(function (li, index) {
    li.textContent = `${index}: Hello`
})
console.log(lis)

//querySelectorAll

const lists = document.querySelectorAll('ul.collection li.collection-item')
lists.forEach(function (list, index) {
    list.textContent = `${index}: Goodbye`;
});
console.log(lists);

const listOdd = document.querySelectorAll('li:nth-child(odd)');
const listEven = document.querySelectorAll('li:nth-child(even)');

listOdd.forEach(function (listOdd, index) {
    // listOdd.textContent = `${index}: Bonjour`;
    listOdd.style.background = "#ccc"

});
console.log(listOdd);

for (let i = 0; i < listEven.length; i++) {
    listEven[i].style.background = 'brown';
}
console.log(listEven);

//traversing the dom
