// Function Expression
var boston = () => console.log('cold')
// Function Declaration
function california() {
  console.log('warm')
}

// Function Invocation, Calling, Execution
boston()
california()

function california() {
  console.log(arguments)
  console.log('warm')
}

california()

/*
outputs: 
cold
[Arguments] {}
warm
[Arguments] {}
warm
*/





//arguments
function siblings(person1, person2) {
  console.log(arguments)
  console.log(Array.from(arguments))
  return `${person1} is related to ${person2}`
}

function siblings2(...args) {
  console.log(args)
  console.log(Array.from(arguments))
  return `${person1} is ${person2}'s twin`
}

siblings('Tia', 'Tamera')

// output: 
/*
[Arguments] { '0': 'Tia', '1': 'Tamera' }
[ 'Tia', 'Tamera' ]
Tia is related to Tamera
*/