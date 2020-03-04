// product sum 
// function that tkeas in a special array and returns its product sum
// input [5, 2,[7,-1],3,[6,[-13,8],4]]
// results 12 ==> 5 + 2 2* (7-1) +3 + 2 * 6 (3*(-13+8) + 4) 

const productSum = (array, multi = 1) => {
  let sum = 0;
  for (const element of array) {
    if (Array.isArray(element)) {
      sum += productSum(element, multi + 1);
    } else {
      sum += element
    }
  }
  return sum * multi;
}