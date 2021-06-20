// pass by value
const number = 100
const string = "Jay"
let obj1 = {
  value: "a"
}
let obj2 = {
  value: "b"
}
let obj3 = obj2;

function change(number, string, obj1, obj2) {
  number = number * 10;
  string = "Pete";
  obj1 = obj2;
  obj2.value = "c";
}

change(number, string, obj1, obj2);


console.log(number)  // 100
console.log(string)  // 'jay'
console.log(obj1.value) // 'a'

//___________________________________________________________//

// pass by reference
var c = [1, 2, 3];
var d = c;
d.push(4);

console.log(c);   // [1,2,3,4]
console.log(d);   // [1,2,3,4]

var a = 5;
var b = a;

b++;

let obj = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me'
  }
};
let clone = Object.assign({}, obj);
let clone2 = { ...obj }
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahaha';
console.log(obj)
//{ a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log(clone)
//{ a: 'a', b: 'b', c: { deep: 'hahaha' } }

console.log(clone2)
// { a: 'a', b: 'b', c: { deep: 'hahaha' } }

console.log(superClone)
// { a: 'a', b: 'b', c: { deep: 'try and copy me' } }