const requestURL = 'https://jsonplaceholder.typicode.com/todos'

function getTodos() {
    return new Promise((resolve, reject) => {
        fetch(requestURL).then(response => {
            if(response.ok){
                resolve(response.json())
            } else {
                reject(new Error('Bagula'))
            }
        })
    })
}

getTodos().then(data => {
    console.log(data)
    printTodos(data)
}).catch(err => {
    console.log(err)
})

function printTodos(requiredData) {
    const container = document.getElementById('container')

    const list = document.createElement('ul')

    requiredData.forEach(element => {
        const li = document.createElement('li')
        li.innerHTML = JSON.stringify(element.id) + " " + JSON.stringify(element.title).slice(1, -1)  
        list.appendChild(li)
    })

    container.appendChild(list)
}
