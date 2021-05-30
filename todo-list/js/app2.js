var submitButton = document.getElementById("submitBtn");
var todo = document.getElementById("inp");

function submitForm(){
    event.preventDefault();
    if(todo.value != '') {
        let li = document.createElement("li");
        //give id
        li.innerHTML = `
        <span id="todo-item" class = "todo-class" >${todo.value}</span>
        <button name="checkButton" id="check"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton" id="delete"><i class="fas fa-trash"></i></button>
        `;
        li.classList.add('todo-list-item');
        let ul = document.querySelector("ul");
        ul.appendChild(li);
        todo.value = '';
        checkFunction();
    }
}

submitButton.addEventListener("click", submitForm);

function checkFunction(){
    event.preventDefault();
    console.log("checkFunction");
    var checkButton = document.getElementById("check"); 
    checkButton.addEventListener("click", lineThroughFunc);
}

function lineThroughFunc(){
    console.log("lineThroughFunc");
    var spanVal = document.getElementById("todo-item");
    spanVal.classList.toggle("done");
}

