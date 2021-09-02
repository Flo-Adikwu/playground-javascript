document.querySelector('.clear-tasks').addEventListener('click', function (e) {
    console.log('hello world')
    e.preventDefault();
})

//same as
document.querySelector('.clear-tasks').addEventListener('click', onClick)

function onClick(e) {
    let val;
    val = e;
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    //event type
    val = e.type;

    //time stamp
    val = e.timeStamp;

    //coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    //coords event relative to the element
    val = e.offsetY;
    val = e.offsetX;


    console.log(val)
}

//Mouse events
//keyboard and input events
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5')

//clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);
taskInput.addEventListener("keydown", runEvent)
taskInput.addEventListener("keyup", runEvent)
taskInput.addEventListener("keypress", runEvent)
taskInput.addEventListener("focus", runEvent)
taskInput.addEventListener("blur", runEvent)
taskInput.addEventListener("cut", runEvent)
taskInput.addEventListener("paste", runEvent)
taskInput.addEventListener("input", runEvent)
// select.addEventListener('change', runEvent)

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    // heading.innerText = e.target.value;
    //get input value
    // console.log(taskInput.value)
    // e.preventDefault();
}



//EVENT BUBBLING AND DELEGATION

//BUBBLING
// document.querySelector('.card-title').addEventListener('click', function () {
//     console.log('card-title')
// })

// document.querySelector('.card-content').addEventListener('click', function () {
//     console.log('card-content')
// })

// document.querySelector('.card').addEventListener('click', function () {
//     console.log('card')
// })

// document.querySelector('.col').addEventListener('click', function () {
//     console.log('col')
// })


//EVENT DELEGATION: putting a listener on the parent of what you are looking for and putting a condition to find the target using e.target and then doing a functionality there
document.body.addEventListener('click', deleteItem);
function deleteItem(e) {
    // if (e.target.className === 'fa fa-remove') {
    //     console.log('deleted item');
    // }
    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('deleted item');
        e.target.parentElement.parentElement.remove();
    }
}