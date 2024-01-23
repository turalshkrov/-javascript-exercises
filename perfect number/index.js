function isPerfect(number) {
  let sumOfDivisors = 0;
  for (let i = 0; i <= number / 2; i++) {
    if (number % i === 0) sumOfDivisors += i;
  }
  if (sumOfDivisors === number) return true;
  else return false;
}

// console.log(isPerfect(5));
// console.log(isPerfect(6));
// console.log(isPerfect(28));
// console.log(isPerfect(100));
// console.log(isPerfect(496));