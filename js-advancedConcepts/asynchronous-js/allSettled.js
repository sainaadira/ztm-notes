/*****************************************************
 /*                  allSettled() ES2020

returns all promises unlike promise.All() regardless if they
they are resolved or rejected
only comes back when all promises that have been added to it are complete


     */
/*****************************************************/

const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000))
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000))

Promise.all([promiseOne, promiseTwo]).then(data => console.log(data))
  .catch(e => console.log(e))
// returns only the resolved promise

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
  .catch(e => console.log('something failed', e))
  // returns both promises regardless if resolved or not