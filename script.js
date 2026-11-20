const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const todoCount = document.querySelector("#todoCount");

// 전체 할 일 개수와 완료된 할 일 개수를 갱신하는 함수
function updateCount() {
  const allItems = document.querySelectorAll("#todoList li");
  const completedItems = document.querySelectorAll("#todoList li .completed");

  const totalCount = allItems.length;
  const doneCount = completedItems.length;

  todoCount.textContent = "전체 " + totalCount + "개 / 완료 " + doneCount + "개";
}

// 기존 li 요소에 완료 토글 및 삭제 버튼 이벤트를 연결하는 함수
function setupTodoItem(li) {
  const span = li.querySelector(".todo-text");
  const deleteBtn = li.querySelector(".delete-btn");

  span.addEventListener("click", function () {
    span.classList.toggle("completed");
    updateCount();
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
    updateCount();
  });
}

// 페이지 처음 열릴 때 기존 할 일 2개에 이벤트 연결 및 개수 갱신
const initialItems = document.querySelectorAll("#todoList li");
for (let i = 0; i < initialItems.length; i++) {
  setupTodoItem(initialItems[i]);
}
updateCount();

// 할 일 추가 함수
function addTodo() {
  const text = todoInput.value.trim();
  if (text === "") {
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add("todo-text");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.classList.add("delete-btn");

  li.append(span, deleteBtn);
  setupTodoItem(li);

  todoList.append(li);

  todoInput.value = "";
  todoInput.focus();

  updateCount();
}