const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector('#todo-list');

const toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));

}

function deleteToDo(event){
    // console.dir(event.target.parentElement) path 를통해 어떤 것을 선택했는지 알 수 있다.
    const li = event.target.parentElement;
    li.remove();

}

function paintToDo(newTodo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newTodo;
    const button = document.createElement('button');
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo );
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
};


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    // console.log(toDoInput.value); <----- 입력값은 newTodo로 바꾸어 넘어가고, 내부 칸은 초기화됨.
    toDoInput.value = '';
    // console.log("new:" + newTodo, "todo:"+toDoInput.value); ;
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
};

toDoForm.addEventListener("submit",handleToDoSubmit);