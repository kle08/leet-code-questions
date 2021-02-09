// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 
//1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. 
//The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.
// Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

//I - number 
//O - number of gaps of zeros in the binary number
//C - time - O(2n)/ O(n)
//E - no edge


function binaryGap(N) {
  let curGap = 0;
  let maxGap = 0;
  let binNum = N.toString(2);
  let strIndexFromEnd = binNum.length - 1;
  for (strIndexFromEnd; strIndexFromEnd >= 0; strIndexFromEnd--) {
    if (binNum.charAt(strIndexFromEnd) != 0) break;
  }
  for (let i = strIndexFromEnd - 1; i >= 0; i--) {
    if (binNum.charAt(i) === '0') {
      curGap = curGap + 1;
    } else {
      if (curGap > maxGap) {
        maxGap = curGap;
      }
      curGap = 0;
    }
  }
  return maxGap;
}

console.log(binaryGap(100))
console.log(binaryGap(451))
console.log(binaryGap(1))
console.log(binaryGap(1000005451))


// curgap
//maxgap 
// convert to binnum
// index
//for loop condition from the end to the begining
// where if its not a zero break the loop
// loop the the bin number from the end
// if a zero is present 
// add to the current gap
// else 
// if curr greater than max 
  // assign max to curr
//where current gap is 0
// return max gap
