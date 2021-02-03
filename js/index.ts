const form = document.getElementById('form')
const inputText = document.getElementById('inputText')
const inputButton = document.getElementById('inputButton')
const deleteButtons = document.querySelectorAll('[delete-button]')

const inputTextValue = (<HTMLInputElement>inputText)

const todosContainer = document.getElementById('todosContainer')

let todos = JSON.parse(localStorage.getItem('todos')) || []

// Add Todo
inputButton.addEventListener('click', ()=> {
    if(inputTextValue.value != ''){
        const todo = createTodo(inputTextValue.value)
        todos.push(todo)

        saveAndDisplay()
        inputTextValue.value = ''
    }
})


/*  Functions */

// Create The Todo
function createTodo(todo){
    return {id: Date.now(), value: todo}
}

// Save And Display Todos
function saveAndDisplay(){
    saveTodos()
    displayTodos(todos)
}

// Save Todos To LocalStorge
function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Display Todos
function displayTodos(list: any){
    clearElement(todosContainer)
    list.forEach(todo => {
        const listElement = document.createElement('li')
        listElement.classList.add('todo')
        listElement.setAttribute('dir', 'rtl')
        listElement.innerHTML = todo.value
        listElement.innerHTML += `<span id="delete" delete-button class="delete"><i class="fa fa-trash-alt"></i></span>`

        todosContainer.appendChild(listElement)
    })
}

displayTodos(todos)

// Clear Todos Before Add
function clearElement(element: Element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}


