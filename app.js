var name = 'John';
console.log(name);
name = 'Claire';
console.log(name);

var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);


//template strings/literals

html = `
<ul>
<li>${name}</li>
<li>${name}</li>
<li>${name}</li>
</ul>
`;

//object literals
let obj = {
    name: 'John',
    age: 13,
    job: 'janitor',
    color: 'black'
}

//function declaration
function greet(name) {
    return "Hello " + name
}
console.log(greet("John"))

//function expression
const square = function (x) {
    return x * x
}
console.log(square(6))

//property methods
const todo = {
    add: function () {
        console.log("add")
    },
    remove: function (id) {
        console.log(`edit ${id}`)
    }
}
todo.delete = function () {
    console.log("delete")
},
    console.log(todo.add());
console.log(todo.edit(56));
console.log(todo.delete());


//IIFEs
(function (name) {
    console.log("Hello " + name);
})("Brad");

//Loops
//forloop
for (let i = 0; i < 10; i++) {
    console.log(i)
}
//while loop
let i = 0;
while (i < 10) {
    console.log(i)
    i++
}
//do while loop
let i = 0;
do {
    console.log(i)
    i++
} //do block is always going to run even when the i is greater than 10. big diff btw dowhile and while
while (i < 10);

//looping thru array
const cars = ['Ford', 'Toyota', 'Chevy', 'Mazda'];
for (let i = 0; i < cars.length; i++) {
    // console.log(i)
    console.log(cars[i])
}

//forEach
cars.forEach(function (car) {
    console.log(car);
})
//map
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Peter" },
    { id: 3, name: "Paul" }
]
const ids = users.map(function (user) {
    return user.id;
})
console.log(ids);

//for-in
const user = {
    firstName: "John",
    lastName: "Jake",
    age: 23

}
for (let x in user) {
    console.log(`${x}: ${user[x]}`)// x returns the keys, user[x] returns the values
}

//window methods/objects/properties
//alert
alert('hello world');
//prompt
const input = prompt();
alert(input);
//confirm
if (confirm('Are you sure?')) {
    console.log('YES')
} else console.log('NO')

//block scope with let and const



//DOM - Document Object Model
