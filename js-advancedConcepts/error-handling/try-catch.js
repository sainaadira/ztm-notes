/**************************************************************/
/* try/catch
used to handle synchronous errors/code
*/
/**************************************************************/

function fail() {
  try {
    // if there are any errors in thhis block
    console.log('this works')
    throw new Error('oops')
  }
  catch (error) {
    // handle them in here
    console.log('we have made an error', error)
  } finally {
    // no matter what happens in try/catch after you're done, finally do something here
    console.log('still good')
    return 'returning fail'
  }
}
fail()