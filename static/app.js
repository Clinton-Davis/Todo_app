// Selectors
const todoInput = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions
function addTodo(e) {
  e.preventDefault();
  // Create DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
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
  //Clear TodoInput Value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //DELETE TODO
  if (item.classList[0] === "trash_btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  //CHECK MARK
  if (item.classList[0] === "complete_btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
