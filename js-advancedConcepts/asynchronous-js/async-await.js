/*****************************************************
 //      ASYNC / AWAIT (built on top of promises)
/*****************************************************/

// using promises & chaining
movePlayer(100, 'left')
  .then(() => movePlayer(400, 'left'))
  .then(() => movePlayer(10, 'right'))
  .then(() => movePlayer(330, 'left'))

/* 
async/ await - syntatic sugar, just promises under the hood
 the purpose of this is to make async code look synchronous
js is inherently synchronous 
*/

// declare an async function with async keyword
// await keyword: pause this function until i have something for you, awaiting the repsonse. once the promises resolves it awaits the next move
async function playerStart() {
  const firstMove = await movePlayer(100, 'left') // pause
  const secondMove = await movePlayer(400, 'left') //pause
  const thirdMove = await movePlayer(10, 'right') // pause
  const fourthMove = await movePlayer(330, 'left') // pause
}

// using fetch
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(console.log)


// using async/await
async function fetchUsers() {
  // function will now pause until we get a resposne from fetch
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)
}


const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url =>
  fetch(url).then(response => response.json())
)).then(array => {
  console.log('users', array[0])
  console.log('posts', array[1])
  console.log('albums', array[2])
}).catch('oops')

// converting above into an async function
const getURL = async () => {

  try {
    const [users, posts, albums] = await Promise.all(urls.map(url =>
      fetch(url).then(response => response.json())
    ))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
  }
  catch (error) {
    console.log(error, 'oops')
  }
}