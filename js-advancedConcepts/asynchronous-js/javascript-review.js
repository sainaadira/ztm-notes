/*****************************************************
        /*  javascript review

  javascript is a single threaded language that is non- blocking

    what is a program: allocate memory
   parse and execute - read and run commands

   js engine consists of:
  (chrome, v8 - reads the code and translates into machine readable code)

   memory heap - memory allocation happens here
   cons- memory leaks due to limited amount of memory and unused memory filling up the heap (ie: global variables)

   const a = 1
   const b = 4
   const c = 100


   call stack - where code is read and executed tells you where you are in the program
   - reads and exeutes the scripts
   reads the first line, get put in the call stack and runs it
   gets removed, pop off the call stack when executed then the next line of code gets pushed inside the call stack

    const one = () => {
      const two = () => {
        console.log('4')
      }
      two()
    }


    async is like a behavior - when you need to do things like making requests & api calls 

     */



/*****************************************************/

// call stack
// recursion: you keep adding foo() to the call stack and this leads to stack overflow
function foo() {
  foo()
}
foo()


/* async
setTimeOut() is part of the web api's that allows us to do async programming

*/
console.log('1')
setTimeout(() => {
  console.log('2')
}, 2000)
console.log('3')


/*event loop review:
monitors the call stack and if the call stack is empty,
it will check the callback queue to push a line into the call stack

*/

