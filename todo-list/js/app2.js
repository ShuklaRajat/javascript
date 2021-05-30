var submitButton = document.getElementById("submitBtn");
var todo = document.getElementById("inp");

function submitForm(){
    event.preventDefault();
    if(todo.value != '') {
        let li = document.createElement("li");
        li.innerHTML = `
        <span id="todo-item" class = "todo-class" >${todo.value}</span>
        <button name="checkButton" id="check" onclick="checkFunction(event)"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton" id="delete"><i class="fas fa-trash"></i></button>
        `;
        li.classList.add('todo-list-item');
        let ul = document.querySelector("ul");
        ul.appendChild(li);
        todo.value = '';
    }
}

submitButton.addEventListener("click", submitForm);

function checkFunction(e){
    let checkButton = e.target;
    console.log("checkFunction");
    checkButton.addEventListener("click", lineThroughFunc(e, checkButton));
}

function lineThroughFunc(e, checkButton){
    console.log("lineThroughFunc");
    let spanVal = e.target.parentNode;
    spanVal.classList.toggle("done");
}













// let submitButton = document.getElementById("submitBtn");
// let todo = document.getElementById("inp");

// const submitForm = () => {
//     event.preventDefault();
//     if(todo.value != '') {
//         let li = document.createElement("li");
//         li.innerHTML = `
//         <span id="todo-item" class = "todo-class" >${todo.value}</span>
//         <button name="checkButton" id="check"><i class="fas fa-check-square"></i></button>
//         <button name="deleteButton" id="delete"><i class="fas fa-trash"></i></button>
//         `;
//         li.classList.add('todo-list-item');
//         let ul = document.querySelector("ul");
//         ul.appendChild(li);
//         todo.value = '';
//         checkFunction();
//     }    
// }

// submitButton.addEventListener("click", submitForm);

// const checkFunction = () => {
//     event.preventDefault();
//     console.log("checkFunction");
//     let checkButton = document.getElementById("check"); 
//     checkButton.addEventListener("click", lineThroughFunc);    
// }

// const lineThroughFunc = () => {
//     console.log("lineThroughFunc");
//     let spanVal = document.getElementById("todo-item");
//     spanVal.classList.toggle("done");
// }
