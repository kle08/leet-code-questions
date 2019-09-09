// Given a 32-bit signed integer, reverse digits of an integer.

var reverse = function (x) {
  // check if x is a neg 
  const isNeg = x < 0 && "-";
  // create array from number 
  const array = Array.from(x.toString()).map(Number);
  // reverse the array and parse into an integer 
  const num = parseInt(array.reverse().join(""));
  // if the number is greater than 32 bit return 0
  if (num > 2147483647) {
    return 0;
  }
  return parseInt(isNeg + num)
};