//Searching and Sorting


//Linear Search

const linearSearch = (array, n) =>{
    for(let i=0; i<array.length; i++) {
        if(array[i] === n) {
            return true
        }
    }

    return false
}

console.log(linearSearch([1,2,3,4,5,6,7,8], 6))
console.log(linearSearch([1,2,3,4,5,6,7,8, 10], 10))

//Binary Search

const binarySearch = (array, n) => {
  var lowIndex = 0,
    highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    var middleIndex = Math.floor((highIndex + lowIndex) / 2);

    if (array[middleIndex] == n) {
      return middleIndex;
    } else if (n > array[middleIndex]) {
      lowIndex = middleIndex +1; //move half right 
    } else {
      highIndex = middleIndex -1; //move half left
    }
  }
  return -1; //no element found
};

console.log(binarySearch([1, 2, 3,4], 4));
console.log(binarySearch([1, 2, 3, 4,], 5));