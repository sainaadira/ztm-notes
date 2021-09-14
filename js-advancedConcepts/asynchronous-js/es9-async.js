/*****************************************************
 /*    ES9 - ES218 (new additions)
{...} - Object spread operator

finally - allows you to do something *finally* after a promise has been finished you add it after catch and the finally block will be called whether or not the .then() works or if error is caught 
called whether promises resloves or rejects and does something that you tell it to. great for times when you need to run a piece of code no matter what (whether a request is sucessful or failed)

for await of-  allows you to loop through async/await calls if you have mulitple of them. (like using a for ...of) now able to iterate over async await
it allows us to loop through multiple promises as if we are using synchrnous code

 */
/*****************************************************/


// object spread operator
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40
}
// destructure
const { tiger, lion, ...rest } = animals

const objectSpread = (p1, p2, p3) => {
  console.log(p1)
  console.log(p2)
  console.log(p3)
}
objectSpread(tiger, lion, rest) // prints:  23, 5 { monkey: 2, bird: 40 }

// array spread operator
let array = [1, 2, 3, 4, 5]
const sum = (a, b, c, d, e) => {
  return a + b + c + d + e
}

sum(...array) // prints: 15


// another exercise

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]
const getURL = async () => {
  try {
    const [users, posts, albums] = await Promise.all(urls.map(async (url) => {
      const response = await fetch(url)
      return response.json()
    }))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
  } catch (error) {
    console.log('oops', error)
  }
}

// looping through urls using for await of loop

const getData2 = async () => {
  // iterable and able to be looped through by for await of
  // returning an array of fetch promises each one of the url requests
  const arrayOfPromises = urls.map(url => fetch(url))
  // then use forawait of to loop through the promises
  for await (let request of arrayOfPromises) {
    const data = await request.json()
    console.log(data)
  }
}