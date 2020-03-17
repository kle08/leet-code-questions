// fib nth #
// the pattern is basically the first 2 numbers is 0 and 1
// the next # is the 2 previous number added together 
// 0, 1, 1, 2, 3, 5, 8, etc

// recursive
// s- O(n) t- O(2^n)
// function fib(n) {
//   if (n === 2) {
//     return 1;
//   } else if (n === 1) {
//     return 0;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// }

// // memoize 
// // S - O(n) T - O(n)
// function fib(n, memoize = { 1: 0, 2: 1 }) {
//   if (n in memoize) {
//     return memoize[n];
//   } else {
//     memoize[n] = fib(n - 1, memoize) + fib(n - 2, memoize);
//     return memoize[n];
//   }
// }

// // iterative 
// function fibNth(n) {
//   if (n <= 2) {
//     return n - 1
//   }
//   let fib = [0, 1];
//   // iterate staring at hte 3rd index
//   for (let i = 3; i <= n; i++) {
//     let sum = fib[i - 2] + fib[i - 3];
//     fib.push(sum);
//   }
//   return fib[n - 1];
// }

function fib(n) {
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}





console.log(fibNth(7));