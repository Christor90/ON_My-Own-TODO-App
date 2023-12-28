
const todos = document.getElementById('todos');
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input-text');

let todosItems = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const text = input.value.trim();
        if (text !== '') {
            addTodos(text);
            input.value = '';
            input.focus();
        }

        updateTodos();
    });

    document.addEventListener('click', (event) => {
        const hasClass = event.target.classList.contains('js-remove-todos');

        if (hasClass) {
            const id = event.target.id;
            removeTodos(id);
        }
        console.log(hasClass);
        console.log(event.target.id);
    });
    

    function updateTodos(){
        const todosList = todosItems.map(
            (todosItems) => `
            <li class="todo_Items">
            <input type="checkbox" name="checktodos">
            <p id="textToStrike">${todosItems.text}</p>
            <span>${todosItems.date}</span>
            <button id="${todosItems.id}" class="js-remove-todos">Remove</button>
            </li> `
        );

        todos.innerHTML = todosList.join('');

        strikeCheck();
    }


    function removeTodos(id){
        todosItems = todosItems.filter((item) => {
            return item.id != id;
        });
        updateTodos();
    }


    function addTodos(text) {
    const todos = {
        text: text,
        date: convertDate(),
        id: todosItems.length + 1,
    };

    todosItems.push(todos);  
    console.log(todosItems);
}

function convertDate() {
    const date = new Date().toLocaleDateString('en-GB');
    return date;
}

function strikeCheck() {
    const container = document.getElementById('todos-container');

    container.addEventListener('change', (e) => {
        const dClass = e.target;

        if (dClass.checked) {
            e.target.parentElement.classList.add('textToStrike');
        } else {
            e.target.parentElement.classList.remove('textToStrike');
        }
    });
}












