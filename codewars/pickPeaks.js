/* In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript

Have fun! */

function pickPeaks(arr) {
  //Array given
  console.log(arr);
  //Find Peaks
  ////get a value and compare between the previous number and the next
  ////If next value is smaller or equal, g to the next
  ////If value is bigger, separate the value and then go to the next
  //////If value is equal or smaller, register the the position e the value
  //////If value is bigger, mark this one as the possible peak an go to the next until find  smaller
  let possiblePeak;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
      possiblePeak = arr[i];
      console.log(`This a possible peak: ${possiblePeak} of positon`);
    }
  }
}

//  return {pos:[],peaks:[]}

pickPeaks([0, 1, 2, 5, 1, 0]);
