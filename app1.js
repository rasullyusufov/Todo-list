const formEl = document.getElementById('form')
const inputEl = document.getElementById('input')
const section = document.querySelector('.section')
const warning = document.querySelector('.warning')

inputEl.focus()
// add fuction
formEl.addEventListener('submit', addTodo)

function addTodo(e) {
  e.preventDefault()
  const text = inputEl.value
  if (inputEl.value === "") {
    warning.classList.remove('hidden')
    inputEl.classList.add('inputTrim')
    setTimeout(() => {
      warning.classList.add('hidden')
      inputEl.classList.remove('inputTrim')
    }, 3000);
  }
  else {
    const TodoList = document.createElement('div')
    TodoList.innerHTML = `
    <li class="li"><div class="todo">
    <h4> ${text}</h4>
    <div class="icons">
       <i class="fas fa-check"></i>
        <i class="far fa-trash-alt"></i>
    
    </div>
    </div></li>
    `
    section.appendChild(TodoList)
    inputEl.value = ""
  }
}


// chekched delete function
document.addEventListener('click', edited)

function edited(e) {
  if (e.target.className === 'far fa-trash-alt') {
    const item = e.target.parentElement.parentElement.parentElement
    item.remove()
  }
  if (e.target.className === 'fas fa-check') {
    const item = e.target.parentElement.parentElement
    item.classList.toggle('chekched')

  }
}

