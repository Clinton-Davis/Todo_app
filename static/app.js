// Selectors
const todoInput = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_list");
const filterOption = document.querySelector(".filter_todo");

// Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Functions
function addTodo(e) {
  e.preventDefault();
  if (todoInput.value.trim() === "") {
    alert("You cannot add a blank item to your to-do list!");
  } else {
    // Create DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo_item");
    todoDiv.appendChild(newTodo);
    // Add TODO to LocalStorage
    saveLocalTodos(todoInput.value);
    // Check Mark Btn
    const compleatedButton = document.createElement("button");
    compleatedButton.innerHTML = '<i class="fas fa-check"></i>';
    compleatedButton.classList.add("complete_btn");
    todoDiv.appendChild(compleatedButton);
    // Trash btn
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash_btn");
    todoDiv.appendChild(trashButton);
    //Append to List
    todoList.appendChild(todoDiv);
    //Clear TodoInput Value
    todoInput.value = "";
  }
}
function deleteCheck(e) {
  const item = e.target;
  //DELETE TODO
  if (item.classList[0] === "trash_btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //CHECK MARK
  if (item.classList[0] === "complete_btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todo = todoList.childNodes;
  todo.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  //CHECK IF THERE ARE ANY THINGS IN LOCAL STORAGE
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  //CHECK IF THERE ARE ANY THINGS IN LOCAL STORAGE
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    // Create DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo_item");
    todoDiv.appendChild(newTodo);
    // Check Mark Btn
    const compleatedButton = document.createElement("button");
    compleatedButton.innerHTML = '<i class="fas fa-check"></i>';
    compleatedButton.classList.add("complete_btn");
    todoDiv.appendChild(compleatedButton);
    // Trash btn
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash_btn");
    todoDiv.appendChild(trashButton);
    //Append to List
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  //CHECK IF THERE ARE ANY THINGS IN LOCAL STORAGE
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  // get the indexof the innertext
  const todoIndex = todo.children[0].innerText;
  // splice the array at the indexof clicked element,
  // remove 1
  todos.splice(todos.indexOf(todoIndex), 1);
  // Add the remainder the the array back to localstorage
  localStorage.setItem("todos", JSON.stringify(todos));
}
