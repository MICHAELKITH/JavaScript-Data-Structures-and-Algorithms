//test for prime numbers

//What is prime number

//From 1-10

//2, 3, 5, 7...

function isPrime(n) {
    // condition
    if (n <= 1) {
        return false;
    }

    // for loop
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(11)); 



