// document.querySelector('form').addEventListener('submit', handleSubmitForm);
// document.getElementsByTagName('form').addEventListener();
function handleSubmitForm() {
    //e.preventDefault();
    // let input = document.querySelector('input');
    let input = document.getElementsById('inp');
    console.log('hello');
    // if (input.value != ''){
    //     addTodo(input.value);
    // }
    input.value = '';
}

// function addTodo(todo){
//     let ul = document.querySelector('ul');
//     let li = document.createElement('li');

//     li.innerHTML = ` <span class="todo-item">${todo}</span>
//     <button name="checkButton"><i class="fas fa-check-square"></i></button>
//     <button name="deleteButton" ><i class="fas fa-trash"></i></button>`;

//     li.classList.add('todo-list-item');
//     ul.appendChild(li);
// }



