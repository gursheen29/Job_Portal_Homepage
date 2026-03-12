let tasks = [];

function addTask(){

let taskInput = document.getElementById("taskInput");
let priority = document.getElementById("priority").value;

let taskText = taskInput.value;

if(taskText === ""){
alert("Enter a task");
return;
}

let task = {
text: taskText,
priority: priority,
completed: false
};

tasks.push(task);

taskInput.value = "";

displayTasks(tasks);

}

function displayTasks(list){

let taskList = document.getElementById("taskList");

taskList.innerHTML = "";

for(let i=0;i<list.length;i++){

let li = document.createElement("li");

li.innerHTML =
list[i].text + " (" + list[i].priority + ") " +
"<button onclick='completeTask("+i+")'>Complete</button>" +
"<button onclick='deleteTask("+i+")'>Delete</button>";

if(list[i].completed){
li.style.textDecoration = "line-through";
}

taskList.appendChild(li);

}

}

function completeTask(index){
tasks[index].completed = true;
displayTasks(tasks);
}

function deleteTask(index){
tasks.splice(index,1);
displayTasks(tasks);
}

function showAll(){
displayTasks(tasks);
}

function showCompleted(){

let completedTasks = tasks.filter(function(task){
return task.completed;
});

displayTasks(completedTasks);
}

function showPending(){

let pendingTasks = tasks.filter(function(task){
return task.completed === false;
});

displayTasks(pendingTasks);
}