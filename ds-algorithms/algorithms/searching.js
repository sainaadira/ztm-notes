/************************************** */
/*
linear searching (sequential searching)  O(N)
finding a target value within a list. sequentially
checks each element in the list until it finds a match

ie: looping through an array and finding an item that matches what you're looking for

not the fastest: costs a lot of time to search through a lot of data sequentially
*/
/****************************************/

// example with code: i want to find 'godzilla'
const beasts = ['centaur', 'godzilla', 'mosura', 'minotaur', 'hydra', 'nessie']

// gives the index of where gozilla is found
beasts.indexOf('godzilla')

// returns a index if condition is met
beasts.findIndex(item => item === 'godzilla')

// returns the item instead of index
beasts.find(item => item === 'godzilla')

// returns a boolean
beasts.includes('godzilla')



/************************************** */
/*
binary search:  O(log n)
if data is sorted, we can do better than O(n) time
you can discard 1/2 the items instead of one at a time

split a list of sorted item
decide if item you're looking for is on the left or right of the list via comparison

*storing data inside of a tree instead of an array is more effcient
*/
/****************************************/
