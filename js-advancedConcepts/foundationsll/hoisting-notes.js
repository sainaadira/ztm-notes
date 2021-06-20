

a();
console.log(one);
var one = 1;
var one = 2;
function a() {
  console.log('hi')
}

function a() {
  console.log('bye')
}
// outputs: bye


// example two 
var favoriteFruit = "grapes";

var foodThoughts = () => {
  console.log(`original favorite fruit: ${favoriteFruit}`);

  var favoriteFruit = 'mango'

  console.log(`new favorite fruit: ${favoriteFruit}`);
};

foodThoughts()

/* output
original favorite fruit: undefined
new favorite fruit: mango

 P.s. when you change the 'var' to 'const' technically there is still hoisting happening. That is why you get a reference error instead of looking at the global favouriteFruit variable. let and const hoist but you cannot access them before the actual declaration is evaluated at runtime. So the engine says, "ya there is a favouriteFood variable here but you can't access it yet"
 */