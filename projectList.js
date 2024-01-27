const listContainer = document.querySelector('.projectList');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

const LOCAL_STORAGE_LIST_KEY = 'task.lists'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

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
        tasks: []
    }
}

//Function to save the list of projects created/submitted by the form
function saveAndRender() {
    save()
    render()
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
}

function render() {
    clearElement(listContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add("list-name")
        listElement.innerHTML = list.name
        listContainer.appendChild(listElement)
    })
}

//Ensures the projects list is emptied i.e the html examples removed and actual input entered
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

export default render
