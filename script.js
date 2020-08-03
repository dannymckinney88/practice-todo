const input = document.querySelector(".todo-input");
const submitBtn = document.querySelector(".submit-btn");
const todoList = document.querySelector(".todo-list");

//event listners 
//document.addEventListener('DOMContentLoaded', getTodos);
submitBtn.addEventListener("click", addToDo)

function addToDo(event){
    event.preventDefault()
    // Creating the div element
    const div = document.createElement('div');
    div.classList.add('todo');
    // Add Li 
    const toDos = document.createElement('li');
    toDos.innerText = input.value
    toDos.classList.add('li');
    div.appendChild(toDos)
    // append div to ul 
    todoList.appendChild(div)
    input.value = ''
}
