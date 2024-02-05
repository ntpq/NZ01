const form = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const inputError = document.getElementsByClassName("inputError")[0];
const taskList = document.getElementById("taskList");

form.addEventListener("submit",checkInput);
function checkInput(event){
    event.preventDefault();
    const value = taskInput.value.trim();
    const key = Date.now() // generate unique key
    if(value === "" ){
        inputError.textContent="Please type something" ;
        
    }else{
        addTask(value,key);
        inputError.textContent="";
        form.reset();
    }
}
function addTask(task,key){
    const newTask = document.createElement('li');
    const removeButton = createRemoveButton(key);
    newTask.textContent = task;
    newTask.setAttribute("class",`Task-${key}`);
    newTask.appendChild(removeButton)
    taskList.appendChild(newTask);
}
function createRemoveButton(key){
    const removeButton = document.createElement('button');
    removeButton.addEventListener("click",removeTask);
    removeButton.innerText = "Remove";
    removeButton.setAttribute("class",`Task-${key}`); // set button className
    return removeButton;
}
function removeTask(event){
    event.preventDefault();
    const className = event.target.className; // get button className
    const task = document.querySelectorAll(`li.${className}`);
    task[0].remove();
}