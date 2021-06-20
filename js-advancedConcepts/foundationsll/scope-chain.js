// Scope:
function sayMyName() {
  var a = 'a';
  return function findName() {
    var b = 'b';
    console.log(c)
    return function printName() {
      var c = 'c';
      return 'sai sum'
    }
  }
}

sayMyName()()()

function findName() {
  var b = 'b';
  return printName();
}

function printName() {
  var c = 'c'
  return 'sai sum'
}

function sayMyName() {
  var a = 'a';
  return findName()
}

sayMyName()