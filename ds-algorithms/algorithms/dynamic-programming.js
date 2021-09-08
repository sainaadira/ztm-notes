/************************************************ */
/*        DYNAMIC PROGRAMMING
  an optimization technique using divide & conqer + memoization
   -- do you have something you can cache? if so, use dynamic programming
   -- it's a way to solve problems by breaking them into smaller sub-problems
   then storing the solutions in case the same sub-problem occurs

   caching- a way to store values so you can use them later on
   a way to speed up programming by storing data in an easily accessible box

   memoization- a specific form of caching
   caching the return value of a function based on its parameters
   if parameters of functions dont change then its memorized
   -- remembering the solution of a sub problem so you don't have to calulate it again

   */
/************************************************ */

const addTo80 = (num) => {
  console.log('long time')
  return num + 80
}


const memoizedAddTo80 = () => {
  let cache = {}
  // using a closure to keep cache inside of function but not reset cache each time it runs
  return (n) => {
    // checking to see if property exists in cached obj
    if (n in cache) {
      return cache[n]
    } else {
      console.log('long time')
      cache[n] = n + 80
      return cache[n]
    }
  }
}
const memoized = memoizedAddTo80()
console.log('1', memoized(5))
console.log('2', memoized(5))


// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// not an efficient time complexity O(2^n)
const calculations = 0

const fibonacci = n => {
  calculations++
  if (n < 2) {
    return n
  }
  return fibonnaci(n - 1) + fibonacci(n - 2)
}

// using dynamic programming O(n)

const fibonacci2 = () => {
  let cache = {}
  return fib = (num) => {
    if (n in cache) {
      return cache[n]
    } else {
      if (n < 2) {
        return n
      } else {
        cache[n] = fib(n - 1) + fib(n - 2)
        return cache[n]
      }
    }
  }
}
const fasterFib = fibonacci2()
console.log('DP', fasterFib(10))