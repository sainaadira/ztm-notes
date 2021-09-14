/*****************************************************
 /*                JOB QUEUE as of ES6 (microstask)
 like the callback queue,  implemented by the browser but event loop is going to check the job queue first to make sure its empty and before the callback queue functions are pushed onto the call stack

 the event loop is going to check the job queue first before it stasts looking at the callback queue

 even thhough setTimeOut() came before the promise.then(), the job queue has higher priority so it gets run first


     */
/*****************************************************/

// callback queue/ task queue
setTimeout(() => { console.log('1', 'is the loneliest number') }, 0)
setTimeout(() => { console.log('2', 'can be as bad as one') }, 10)

//2 job queue - microtask queue
Promise.resolve('hi').then((data) => console.log('2', data))

//3
console.log('3', 'is a crowd')



/* prints:
is a crowd
hi
is the loneliest number
 can be as bad as one
 */