const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

}

function deleteToDo(event){
    // console.dir(event.target.parentElement) path 를통해 어떤 것을 선택했는지 알 수 있다.
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newTodo.text;
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
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
};

toDoForm.addEventListener("submit",handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
};


function sexyFilter(   ){


}
