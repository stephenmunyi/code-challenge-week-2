function isPrime(element) {
    for (let i = 2; i < element; i++) {
        if (element % i === 0) {
            return false;
        }
    }
    return element  !== 1;
}
let array = {1,2,3,4,5,6,7,8,9,10};
let primes = array.filter(isPrime);