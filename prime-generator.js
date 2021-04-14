/**
 * We are required to write a JavaScript function that takes in a number as the only argument, 
 * let's call the number n. The function should find and return the nth prime number from the starting.
 */
const findPrime = (num) => {
	let i,
		primes = [2, 3],
		n = 5;
	const isPrime = (n) => {
		let i = 1,
			p = primes[i],
			limit = Math.ceil(Math.sqrt(n));
		while (p <= limit) {
			if (n % p === 0) {
				return false;
			}
			i += 1;
			p = primes[i];
		}
		return true;
	};
	for (i = 2; i <= num; i += 1) {
		while (!isPrime(n)) {
			n += 2;
		}
		primes.push(n);
		n += 2;
	}
	return primes[num - 1];
};
console.log(findPrime(6));
console.log(findPrime(16));
console.log(findPrime(66));
