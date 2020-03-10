// given a array of numbers return an array with the 3 largest numbers 
// [11,2,3,6,8] => [6,8,11]


// function findThreeLargestNumbers(array) {
//    const sortArray = array.sort((a,b) => b - a);
//   const largestNum = [];
// 	largestNum.push(sortArray[2])
// 	largestNum.push(sortArray[1])
// 	largestNum.push(sortArray[0])

//   return largestNum;
// }



function findThreeLargestNum(array) {
  const topThree = [null, null, null]
  for (const num of array) {
    updateLargest(topThree, num)
  }
  return topThree;
}

function updateLargest(topThree, num) {
  if (topThree[2] === null || num > topThree) {
    shiftAndUpdate(topThree, num, 2);
  } else if (topThree[1] === null || num > topThree) {
    shiftAndUpdate(topThree, num, 1);
  } else if (topThree[0] === null || num > topThree) {
    shiftAndUpdate(topThree, num, 0);
  }
}

function shiftAndUpdate(array, num, idx) {
  for (let i = 0; i < idx; i++) {
    if (i === idx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}

console.log(findThreeLargestNum([11, 2, 5, 23, 66, 3, 2, 4]))