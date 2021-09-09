/*****************************************************************/
/*                     functional programming

about separation of concerns
separate data + functions
have an empashis on simplicity
functions operate on well defined data structure like objects, arrays

pillar of FP: pure functions
- separation of data of program and behavior of programming
- all objects that are created are immutable once something is created it cannot be changed
- avoids shared state and mutable data

excercise concept: organizing data and their use cases and why fp can make
you a better programmer

hired by etsy, 
etsy needs to implememnt shopping feature

has active user
carts + purchases array
user can add to cart and purchase
*/
/*****************************************************************/


const user = {
  name: 'kim',
  active: true,
  cart: [],
  purchases: []
}

const compose = (f, g) => (...args) => f(g(...args))

purchaseItem(
  emptyCart,
  buyItem,
  addTax,
  addToCart
)(user, { name: 'plant', price: 20 })

// 1. Add items to cart.
function purchaseItem(...fns) {
  return fns.reduce((compose))
}

function addToCart(user, item) {
  const updateCart = user.cart.concat(item)
  return Object.assign({}, user, { cart: updateCart })
}
// 2. Add 3% tax to item in cart
function addTax(user) {
  const { cart } = user
  const taxRate = 1.3
  const updatedCart = cart.map(item => {
    return {
      item: item.name,
      price: item.price * taxRate
    }
  })
  return Object.assign({}, user, { cart: updatedCart })
}

// 3. Buy item: cart --> purchases
function buyItem(user) {
  return Object.assign({}, user, { purchases: user.cart })
}


// 4. Empty cart
function emptyCart(user) {
  return user
}
