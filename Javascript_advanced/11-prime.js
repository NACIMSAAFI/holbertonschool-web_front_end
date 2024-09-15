// Reuse the function countPrimeNumbers
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        count++;
      }
    }
    return count;
  }
  
  // Measure the execution time for 100 executions of countPrimeNumbers
  const startTime = performance.now();
  
  // Use setTimeout to defer the calculation
  setTimeout(() => {
    for (let i = 0; i < 100; i++) {
      countPrimeNumbers();
    }
  
    const endTime = performance.now();
    const executionTime = endTime - startTime;
  
    console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);
  }, 0);
  