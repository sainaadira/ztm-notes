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
time complexity    &  space complexity
   O(N ^2)                O(1)

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
    // set current index as minimum (99)
    let min = i
    let temp = array[i]
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        //update minimum if current is lower that what we had previously (44 is less than 99. 44 now becomes the minimum)
        min = j
      }
    }

    array[i] = array[min]
    array[min] = temp

  }
  return array
}

selectionSort(numbers) // [0,  1,  2,  4,  5, 6, 44, 63, 87, 99, 283]

/*
insertion sort -

used for when the list is almost or already sorted
also when the list is small
in best case O(N) time complexity
*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  let length = array.length
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // move number to the first postion
      array.unshift(array.splice(i, 1)[0])
    } else {
      // find where the number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[i - 1] && array[i] < array[j]) {
          // move number to the right spot
          array.splice(j, 0, array.splice(i, 1)[0])
        }
      }
    }
  }
}

insertionSort(numbers)
console.log(numbers)



/*
merge sort (divde & conqer) // O(N LOG N)

one of the most efficient ways to sort a list
downside: O(n) space complexity

*/
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const mergeSort = array => {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length // grab length of array
  const middle = Math.floor(length / 2) // divide array down middle
  const left = array.slice(0, middle) // grabs left side of array
  const right = array.slice(middle)    // grabs right side of array
  // console.log('left:', left);
  // console.log('right:', right);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length &&
    rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++
    }
  }
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers)
console.log(answer)



/* quick sort - divide and conqer
O(N LOG N) - time complexity
O(LOG N) - space complexity
pivot element is chosen first
largest elements goes to right of pivot
smallest elements goes to left of pivot
*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  let pivot
  let partitionIndex

  if (left < right) {
    pivot = right
    partitionIndex = partition(array, pivot, left, right)

    //sort left and right
    quickSort(array, left, partitionIndex - 1)
    quickSort(array, partitionIndex + 1, right)
  }
  return array
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot]
  let partitionIndex = left

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex)
      partitionIndex++
    }
  }
  swap(array, right, partitionIndex)
  return partitionIndex
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex]
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = temp
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1)
console.log(numbers)




// sorting exercise 

/*

#1 - Sort 10 schools around your house by distance:
     insertion sort

#2 - eBay sorts listings by the current Bid amount:
    radix/counting sort

#3 - Sport scores on ESPN
    quick sort

#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
    merge sort

#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
      insertion sort


#6 - Temperature Records for the past 50 years in Canada
    radix/counting
    quick sort

#7 - Large user name database needs to be sorted. Data is very random.
  quick sort

#8 - You want to teach sorting for the first time
   bubble sort/ selection sort

*/