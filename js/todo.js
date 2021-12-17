const toDoForm=document.getElementById("todo-form");
const toDtoInput=toDoForm.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");

const TODOS_KEY="todos";

let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
function deleteTodo(event){
    const li=event.target.parentElement;
    li.remove();
    toDos=toDos.filter(toDo=>toDo.id!==parseInt(li.id));//기존 클릭했던 아이디와 다른것 배열 생성
    saveToDos();
}

function paintToDo(newTodo){
    const li=document.createElement("li");
    li.id=newTodo.id;
    const span=document.createElement("span");
    span.innerText=newTodo.text;
    const button=document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault(); //
    const newTodo=toDtoInput.value;
    toDtoInput.value="";
    const newTodoObj={ //각 배열값에 Id 입력하여 갱신시 사용
        text: newTodo,
        id: Date.now(),//id Date.now 를 사용하여 고유의값 적용
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);
if(savedToDos){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}