const listContainer = document.querySelector('.projectList');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');
const deleteListButton = document.querySelector('[data-delete-list-button]');
const listDisplayContainer = document.querySelector('[data-list-display-container]');
const listTitleElement = document.querySelector('[data-list-title]');
const tasksContainer = document.querySelector('[data-tasks]');
const taskTemplate = document.getElementById('task-template')

const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)


listContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'li') {
        selectedListId = e.target.dataset.listId
        saveAndRender()
    }
})

deleteListButton.addEventListener('click', e => {
    lists = lists.filter(list => list.id !== selectedListId)
    selectedListId = null
    saveAndRender()
})

newListForm.addEventListener('submit', e => {
    e.preventDefault()
    const listName = newListInput.value
    if (listName == null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    saveAndRender()
})

function createList(name) {
    return { 
        id: Date.now().toString(),
        name: name,
        tasks: [ {
            id: 'asdsasd', 
            name: 'Task 1',
            complete: false, 
            date: '01/01/2025',
            priority: 'High'
        },
        {
            id: 'asdsasd', 
            name: 'Task 2',
            complete: true, 
            date: '01/02/2025',
            priority: 'Low'
        }]
    }
}

//Function to save the list of projects created/submitted by the form
function saveAndRender() {
    save()
    render()
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
}

function render() {
    clearElement(listContainer)
    renderList()

    const selectedList = lists.find(list => list.id === selectedListId)
    if (selectedListId == null) {
        listDisplayContainer.style.display = 'none'
    } else {
        listDisplayContainer.style.display = ''
        listTitleElement.innerHTML = selectedList.name
        clearElement(tasksContainer)
        renderTasks(selectedList)
    }   
}

function renderTasks(selectedList) {
    selectedList.tasks.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkbox = taskElement.querySelector('input')
        checkbox.id = task.id
        checkbox.checked = task.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = task.id
        label.append(task.name)
        //Trying to figure out how to get these two other fields to show
        const date = taskElement.getElementById('date')
        date.append(task.date)
        const priority = taskElement.getElementById('priority')
        priority.append(task.priority)
        //Need to figure out how to set the ID of these tasks

        tasksContainer.appendChild(taskElement)
    })
}

function renderList() {
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add("list-name")
        listElement.innerHTML = list.name
        if (list.id === selectedListId) {
            listElement.classList.add('active-list') 
        }
        listContainer.appendChild(listElement)
    })
}

//Ensures the projects list is emptied i.e the html examples removed and actual input entered
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

// function clearTasks(element) {
//     while (element.firstElementChild) {
//         element.removeChild(element.lastElementChild);
//     }
// }

export default render
