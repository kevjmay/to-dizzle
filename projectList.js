const listContainer = document.querySelector('.projectList');

let lists = ['Project One', 'Project Two', 'Project Three'];

function render() {
    clearElement(listContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.classList.add("list-name")
        listElement.innerHTML = list
        listContainer.appendChild(listElement)
    })
}

function clearElement(element) {

}

export default render
