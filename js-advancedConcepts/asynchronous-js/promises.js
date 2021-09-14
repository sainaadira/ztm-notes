/*****************************************************
 /*                      PROMISES
    a promise is an object that produces a single value
       states: fulfilled, pending, rejected

     */
/*****************************************************/

// promise example
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('stuff worked')
  } else {
    reject('error, it broke')
  }
})
promise
  .then(result => result + '!')
  .then(result2 => {
    console.log(result2)
  }) // prints: stuff worked!
  .catch(() => console.log('error'))

const promise2 = new Promise((resove, reject) => {
  setTimeout(resolve, 100, 'Hi')
})

const promise3 = new Promise((resove, reject) => {
  setTimeout(resolve, 1000, 'Pookie')
})

const promise4 = new Promise((resove, reject) => {
  setTimeout(resolve, 3000, 'it is it me you are looking for')
})

// Promise.all() takes an array of promises and values will be returned as an array in the order that they were called. waits for all promises to be resolved then logs the values

Promise.all([promise, promise2, promise3, promise4])
  .then(values => {
    console.log(values)
  })