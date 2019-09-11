// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

const isPalindrome = function (x) {
  return x === Number(x.toString().split('').reverse().join(''))
};