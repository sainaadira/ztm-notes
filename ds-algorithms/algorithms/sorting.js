/*****************************************************************/
/*                           sorting
  best with handling large data sets (inputs)





 further notes:
-- sorting numbers with sort() converts numbers into strings
instead of just comparing numbers
-- sorting strings with accents with sort() (like in spanish) is not the same as sorting
alphabetically in english (use localeCompare())

 */

/*****************************************************************/

// quick examples
const letters = [...'adzerb']
letters.sort()  // [ 'a', 'b', 'd', 'e', 'r', 'z' ]

const basket = [2, 65, 34, 2, 1, 7, 8]
basket.sort()  // [1, 2, 2, 34, 65, 7, 8] * not in chronological order
basket.sort((a, b) => a - b) // [ 1, 2, 2, 7, 8, 34, 65]

const spanish = ['único', 'árbol', 'cosas', 'fútbol']
spanish.sort() // [ 'cosas', 'fútbol', 'árbol', 'único' ]
spanish.sort((a, b) => a.localeCompare(b)) //['árbol', 'cosas', 'fútbol', 'único']



/*
bubble sort - compare 2 adjacent elements and swap them if in wrong order and bubble the
largest element to bubble to the end of the array

least efficient
time    &  space complexity
O(N ^2)    O(1)

*/


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

const bubbleSort = array => {
  const length = array.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      // if the number in arr[0] is greater than the next
      if (array[j] > array[j + 1]) {
        // swap numbers
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
}

bubbleSort(numbers)
console.log(numbers)  //   [0,  1,  2,  4,  5, 6, 44, 63, 87, 99, 283]



/*
selection sort -
time complexity- O(N^2)
space complexity - O(1)
*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const selectionSort = array => {
  let length = array.length
  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let min = i
    let temp = array[i]
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        //update minimum if current is lower that what we had previously
        min = j
      }
    }

    array[i] = array[min]
    array[min] = temp

  }
  return array
}

selectionSort(numbers) // [0,  1,  2,  4,  5, 6, 44, 63, 87, 99, 283]