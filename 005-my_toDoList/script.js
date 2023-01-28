const todoInput = document.getElementById('todo-input');
const addBtn = document.querySelector('#btn-add');
const itemList = document.querySelector('.item-list');


let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

window.addEventListener('load',()=>{
getTodoListFromLocalStorage()
})

const getTodoListFromLocalStorage=()=>{
   todoList.forEach((todo)=>{
    createTodo(todo)
   })
}

addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if(todoInput.value.trim() === ""){       
        Swal.fire('Please enter a task')
        return
    }
    
    const newTodo ={
        id: new Date().getTime(),
        completed:false,
        text: todoInput.value
    }
    createTodo(newTodo)

    todoList.push(newTodo)
    localStorage.setItem('todoList', JSON.stringify(todoList))

    e.target.closest('form').reset()
})
const createTodo =(newTodo)=>{
const {id,completed,text} = newTodo

const li =document.createElement('li')
li.setAttribute('id', id)

const p = document.createElement('p')
p.innerText = text
li.append(p)

const span = document.createElement('span')

completed ? li.classList.add('checked'):""
const icon = document.createElement('i')
icon.setAttribute('class', 'fa-solid fa-square-check')
span.append(icon)

const removeIcon = document.createElement('i')
removeIcon.setAttribute('class', 'fa-solid fa-trash-arrow-up')
span.append(removeIcon) 

li.append(span)

itemList.append(li)
}

itemList.addEventListener('click', (e)=>{
    const liId = e.target.closest('li').getAttribute('id')
    if(e.target.classList.contains('fa-square-check')){
       e.target.closest('li').classList.toggle('checked')
                   
        todoList.map((todo)=>{
            if(todo.id == liId){
                todo.completed = !todo.completed
            }
        })
        
        localStorage.setItem('todoList',JSON.stringify(todoList))
    }
    else if(e.target.classList.contains('fa-trash-arrow-up')){
        e.target.closest('li').remove()

        todoList = todoList.filter((todo)=> todo.id !=liId)

        localStorage.setItem('todoList', JSON.stringify(todoList))
    }
    else{
        // alert("please choose your current action")
        Swal.fire('Choose a valid action')
    }
})