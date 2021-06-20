// type coersion
// 1 == '1' => true : they are the same in value but not data type
// 1 === '1' => false : do not have same data type


false == "" //  true
false == [] //  true
false == {} //  false
"" == 0   //   true
"" == []  //   true
"" == {}  //   false
0 == []   //   true
0 == {}   //  false
0 == null //  false

  // there's a such thing as negative and postive 0

  - 0 === 0 // you get true

//using Object.is()
// The Object.is() method determines (compares) whether two values are the same value and returns a boolean

// syntax: Object.is(value1, value2)

Object.is(-0, 0) // false


NaN === NaN // false
Object.is(NaN, NaN) // true