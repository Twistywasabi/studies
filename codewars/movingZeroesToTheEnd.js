function moveZeros(arr) {
  //Go through array
  ////if array element equals 0, count it , else just push the element in the new array

  let i = 0;
  let zeroCounter = 0;
  let newArray = [];
  while (i < arr.length) {
    if (arr[i] === 0) {
      zeroCounter++;
    } else {
      newArray.push(arr[i]);
    }
    i++;
  }
  //After that, push 0 the number of times according to the zeroCounter

  for (i = 0; i < zeroCounter; i++) {
    newArray.push(0);
  }

  return newArray;
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
