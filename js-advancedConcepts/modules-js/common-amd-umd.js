/*********************************************************************/
/*                     COMMON, AMD, UMD

common- modules are meant to be loaded synchronously and not ideal for browsers
        sync on the code on the browser isnt good but its mainly used on server
        browserify and bundle.js no need to worry about polluting global name space and bundle depedencies in a single file

amd- designed for browsers because it is async. loads modules async

umd- 

 */
/**********************************************************************/

//common
var module1 = require('module1')
var module2 = require('module2')

function fight() {

}

module1.exports = {
  fight: fight
}

// amd
define(['module1', 'module2'],
  function (module1Import, module2Import) {
    let module1 = module1Import
    let module2 = module2Import

    function dance() { }

    return {
      dance: dance
    }

  })