function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.getElementById('inp');

    if (input.value != ''){
        addTodo(input.value);
    }
    input.value = '';
}

function addTodo(todo){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `<span class="todo-item">${todo}</span>
    <button name="checkButton" class="check" onclick="checkOrDelete(event)"><i class="fas fa-check-square"></i></button>
    <button name="deleteButton" onclick="checkOrDelete(event)"><i class="fas fa-trash"></i></button>`;

    li.classList.add('todo-list-item');
    ul.appendChild(li);
}

function clearAll(e) {
    document.querySelector('ul').innerHTML = '';
}

function checkOrDelete(e){
    console.log('check or delete');

    if(e.target.name == 'checkButton'){
        
        document.querySelector("button").classList[0].toggle("done");
        // let item = e.target.parentNode;

        // if(item.style.textDecoration == 'line-through'){
        //     item.style.textDecoration = 'none';
        // }
        // else {
        //     item.style.textDecoration = 'line-through'; 
        // }

    }
    if(e.target.name == 'deleteButton'){
        let item = e.target.parentNode;
        item.remove();
    }
}
