    // var input = document.getElementById("input");
    // var button = document.getElementById("enter");
    // console.log(input);
    // console.log(button);

    // document.getElementById("enter").addEventListener('click', function() {
    //     console.log("working");
    // });

var button = document.getElementById("submitBtn");
var todo = document.getElementById("inp");
button.addEventListener("click", submitForm);

function submitForm(){
    event.preventDefault();

    let li = document.createElement("li");
    li.innerHTML = `
    <span class="todo-item">${todo.value}</span>
    <button name="checkButton" id="check" onclick="checkOrDelete(event)"><i class="fas fa-check-square"></i></button>
    <button name="deleteButton" onclick="checkOrDelete(event)"><i class="fas fa-trash"></i></button>
    `;
    li.classList.add('todo-list-item');
    let ul = document.querySelector("ul");
    ul.appendChild(li);
}

var check_ = document.getElementById("check");
check_.addEventListener("click", checkFunction);

function checkFunction(){
    event.preventDefault();
    console.log("checkFunction");
    event.target.getElementbyClass("todo-item").toggle("done");
}

