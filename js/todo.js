const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector('#todo-list');

function paintToDo(newTodo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
};

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    // console.log(toDoInput.value); <----- 입력값은 newTodo로 바꾸어 넘어가고, 내부 칸은 초기화됨.
    toDoInput.value = '';
    // console.log("new:" + newTodo, "todo:"+toDoInput.value); ;
    paintToDo(newTodo);
};

toDoForm.addEventListener("submit",handleToDoSubmit);