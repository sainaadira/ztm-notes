/**************************************************************/
/* asyc error handling

*/
/**************************************************************/

Promise.resolve('asyncfail')
  .then(response => {
    throw new Error('first fail')
    return response
  })
  .then(response => {
    console.log(response)
  })
  .catch(err => console.log(err))

  // asyc error handling part 2
  (async () => {
    try {
      await Promise.resolve('i work')
      await Promise.reject('oops')
    } catch (err) {
      console.log(err)
    }
    console.log('is this still good?')
  })()