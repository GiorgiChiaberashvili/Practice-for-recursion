/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

// function addToTwelve(arr){

//       if(!arr.length) return false

//       let firstNum = arr[0]
//       let secondNum = arr[1]

//       if(firstNum + secondNum === 12) return true
//       return addToTwelve(arr.slice(1))
// }

function addToTwelve(array, start = 0) {
  if (start >= array.length) {
    return false;
  }
  if (array[start] + array[start + 1] === 12) {
    return true;
  }
  return addToTwelve(array, start + 1);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
