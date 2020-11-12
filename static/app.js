// Selectors
const todoInput = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_list");

// Event Listeners
todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(e) {
  e.preventDefault();
  // Create DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = "Testing";
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
}
