function isPrimeNumber(number) {
  if (number === 1) return false;
  if (number === 2) return true;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) return false
  }
  return true;
}

// console.log(isPrimeNumber(11));
// console.log(isPrimeNumber(12));
// console.log(isPrimeNumber(37));
// console.log(isPrimeNumber(38));