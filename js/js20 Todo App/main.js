//add buttonunu dinle
// tiklandiginda inputu al
// yeni bit todo olustur
// ve bunu DOM un icine koy

const addTaskButton = document.querySelector(".addTask");
const todoInput = document.querySelector(".todoInput");
const todosContainer = document.querySelector(".todos");

console.log(addTaskButton, todoInput);

const toggleComplete = (event) => {
  const { parentElement } = event.currentTarget;

  const isCompleted = [...parentElement.classList].some(
    (className) => className === "completed"
  );

  if (!isCompleted) {
    event.currentTarget.innerText = "Todo";
  } else {
    event.currentTarget.innerText = "Completed";
  }

  event.currentTarget.parentElement.classList.toggle("completed");
};

const removeItem = (event) => {
  todosContainer.removeChild(event.currentTarget.parentElement)
  //console.log(event.currentTarget.parentElement);
};

const renderTodoItem = (todoText) => {
  const todoItemElement = document.createElement("li");
  todoItemElement.classList.add("todoItem");
  // todoItemElement.innerText = todoText;

  const completeButton = document.createElement("button");
  completeButton.classList.add("completeButton");
  completeButton.innerText = "Complete";
  completeButton.addEventListener("click", toggleComplete);
  todoItemElement.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", removeItem);
  todoItemElement.appendChild(deleteButton);

  const textElement = document.createElement("p");
  textElement.innerText = todoText;
  textElement.classList.add("todoText");
  todoItemElement.appendChild(textElement);

  todosContainer.appendChild(todoItemElement);
  todoInput.value = "";
  todoInput.focus();
};

const addTask = () => {
  if (todoInput.value === "") {
    alert("Input cannot be empty!");
  } else {
    renderTodoItem(todoInput.value);
  }
  console.log(todoInput.value);
};
addTaskButton.addEventListener("click", addTask);
