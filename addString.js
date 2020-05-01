// Add strings 
// given 2 non negative nubmers, represent them as a string return the sum of both var
// Constraints - cant use built in biginteger libary or conver the inputs to integer 
// length of both var is < 500
// both var contains only 0-9 digits 
// does not conatin any leading zero's

function addStrings(num1, num2) {
  let a = num1.split("").reverse().join("");
  let b = num2.split("").reverse().join("");
  let len = Math.max(a.length, b.length)
  // let len = a.length > b.length ? a.length : b.length;
  result = [];
  for (let i = 0; i < len; i++) {
    num1 = Number(a[i] || 0);
    num2 = Number(b[i]) || 0;
    curr = Number(result[i] || 0) + num1 + num2
    if (curr >= 10) {
      result[i] = curr % 10;
      result.push(1);
    }
    else {
      result[i] = curr;
    }
  }
  return result.reverse().join("");
}

console.log(addStrings('16523', '6823'));