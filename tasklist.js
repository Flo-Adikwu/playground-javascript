//define UI variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();

function loadEventListeners() {
    //DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks);
    //add task event
    form.addEventListener('submit', addTask);
    //remove task event
    taskList.addEventListener('click', removeTask);
    //clear task event
    clearBtn.addEventListener('click', clearTasks);
    //filter task event
    filter.addEventListener('keyup', filterTasks)


}

function addTask(e) {
    if (taskInput.value === "") {
        alert("Add a task!")
    }

    //C reate li element
    const li = document.createElement("li");
    //add class 
    li.className = "collection-item";
    //create textnode and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    link.style.cursor = 'pointer';
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"><i/>';
    //append link to li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    //store in LS
    storeTaskInLocalStorage(taskInput.value);

    //clear input
    taskInput.value = '';
    console.log(li)
    e.preventDefault();
}

//get tasks from LS
function getTasks() {
    let taskss;
    if (localStorage.getItem('taskss') === null) {
        taskss = []
    } else {
        taskss = JSON.parse(localStorage.getItem('taskss'))
    }

    taskss.forEach(function (tasks) {
        const li = document.createElement("li");
        //add class 
        li.className = "collection-item";
        //create textnode and append to li
        li.appendChild(document.createTextNode(tasks));
        //create new link element
        const link = document.createElement('a');
        link.style.cursor = 'pointer';
        //add class
        link.className = 'delete-item secondary-content';
        //add icon html
        link.innerHTML = '<i class="fa fa-remove"><i/>';
        //append link to li
        li.appendChild(link);

        //append li to ul
        taskList.appendChild(li);
    })
}
//store task in LS
function storeTaskInLocalStorage(task) {
    let taskss;
    if (localStorage.getItem('taskss') === null) {
        taskss = []
    } else {
        taskss = JSON.parse(localStorage.getItem('taskss'))
    }
    taskss.push(task);
    localStorage.setItem('taskss', JSON.stringify(taskss));
}

//remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
            //remove item from LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);

        }
    }
}


//remove from LS
function removeTaskFromLocalStorage(taskItem) {
    let taskss;
    if (localStorage.getItem('taskss') === null) {
        taskss = []
    } else {
        taskss = JSON.parse(localStorage.getItem('taskss'))
    }

    taskss.forEach(function (tasks, index) {
        if (taskItem.textContent === tasks) {
            taskss.splice(index, 1)
        }
    })

    //set local storage again
    localStorage.setItem('taskss', JSON.stringify(taskss))
}

//clear tasks
function clearTasks() {
    // taskList.innerHTML = '';

    //faster method
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    //clear from LS
    clearTasksFromLocalStorage()

}


//clear tasks from LS
function clearTasksFromLocalStorage() {
    localStorage.clear();
}

//filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}