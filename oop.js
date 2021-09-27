//constructor and "this" keyword

// function Person(name, dob){
//     this.name = name;
//     this.birthday = new Date(dob);
//     this.calculateAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970)
//     }

// }

// console.log(this);

// const brad = new Person("Brad", "9-10-1973")
// console.log(brad.calculateAge());

//PROTOTYPES
// function Person(firstname, lastname, dob){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.birthday = new Date(dob);
//     // this.calculateAge = function(){
//     //     const diff = Date.now() - this.birthday.getTime();
//     //     const ageDate = new Date(diff);
//     //     return Math.abs(ageDate.getUTCFullYear() - 1970)
//     // }

// }

// //calculate age
// Person.prototype.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970)
// }

// //get fullname
// Person.prototype.getFullname =  function(){
//     return `${this.firstname} ${this.lastname}`
// }

// //get married
// Person.prototype.getsMarried = function(newLastname){
//     this.lastname = newLastname;
// }

// // console.log(this);

// const brad = new Person("Brad", "Pitt", "9-10-1973");
// console.log(brad);
// console.log(brad.calculateAge());
// console.log(brad.getFullname());
// brad.getsMarried('Oneal');
// console.log(brad.getFullname());
// console.log(brad.hasOwnProperty('firstname')); // returns true
// console.log(brad.hasOwnProperty('getFullname')); // returns false because getFullname is not part the property but rather part of the prototype 


//PROTOTYPAL INHERITANCE
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

//GREETING
Person.prototype.greeting = function () {
    return `Hello there ${this.firstname} ${this.lastname}`
}

const person1 = new Person('John', 'Doe');

//Customer Constructor
function Customer(firstname, lastname, phone, membership) {
    Person.call(this, firstname, lastname);
    this.phone = phone;
    this.membership = membership
}

//inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

//make Customer.prototype return Customer() instead of Person()
Customer.prototype.constructor = Customer;

const customer1 = new Customer('Tom', 'Bill', 0807464, 'Standard');
console.log(customer1);

//customer greeting
Customer.prototype.greeting = function () {
    return `Hello there ${this.firstname} ${this.lastname} welcome to our company`
}
console.log(customer1.greeting);


//USING OBJECT.CREATE
const pesronPrototype = {
    greeting: function () {
        return `Hello there ${this.firstname} ${this.lastname}`

    },
    getsMarried: function (newLastname) {
        this.lastname = newLastname
    }
}
const mary = Object.create(pesronPrototype);
mary.firstname = 'Mary';
mary.lastname = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');
console.log(mary.greeting());

const brad = Object.create(pesronPrototype, {
    firstname: { value: "Brad" },
    lastname: { value: "Traversy" },
    age: { value: 36 }

})
console.log(brad.greeting())

//ES6 CLASSES

class Person {
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = new Date(dob);
    }
    //any method we add inside the class will actually get added into the prototype
    greeting() {
        return `Hello there ${this.firstname} ${this.lastname}`
    }
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    getsMarried(newLastname) {
        this.lastname = newLastname
    }

    static addNumbers(x, y) {
        return x + y
    }
}

const ruth = new Person('Ruth', 'Sawyer');
ruth.getsMarried('Phillip');
console.log(ruth.greeting());//appears in the prototype
console.log(ruth.calculateAge());//appears in the prototype 
console.log(ruth.addNumbers());// throw error because addNumbers method is static
Person.addNumbers(1, 2); //returns 3


//SUBCLASSES - EXTENDING CLASSES
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    //any method we add inside the class will actually get added into the prototype
    greeting() {
        return `Hello there ${this.firstname} ${this.lastname}`
    }
}

class Customer extends Person {
    constructor(firstname, lastname, phone, membership) {
        super(firstname, lastname);//calls the parent class
        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer('John', 'Doe', '555-555', 'Standard');

console.log(john);
console.log(jon.greeting());
console.log(Customer.getMembershipCost());