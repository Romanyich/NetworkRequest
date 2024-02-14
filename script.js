const requestURL = 'https://jsonplaceholder.typicode.com/todos'


/* Решение 1 */
function getPostsWithPromise() {
    return new Promise((resolve, reject) => {
        fetch(requestURL).then(response => {
            if(response.ok) {
                resolve(response.json())
            } else {
                reject(new Error('bagula'))
            }
        })
    })
}

/* Решение 2 */
async function getPostsWithAsync() {
    const response = await fetch(requestURL)
    const posts = await response.json()
    return posts
}

const indArr = [15, 23, 7, 3]

function choice (func) {
    func()
    .then(data => {
        printPosts(data)})
    .catch(err => {
        console.log(err)
    })
}

/* Передаем либо getPostsWithPromise либо getPostsWithAsync */
choice(getPostsWithPromise)

function printPosts(data) {
    const container = document.getElementById('container')

    for(i = 0; i < indArr.length; i++) {
    const el = document.createElement('p')
    el.innerHTML = JSON.stringify(data[indArr[i] - 1].title)
    container.appendChild(el)
    }
}
