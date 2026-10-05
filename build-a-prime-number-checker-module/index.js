function isPrime(num) {
    let dividers = [];
    for(let i = 1; i <= num; i++) {
        if(num % i == 0) {
            dividers.push(i);
        }
    }

    if(dividers.length == 2) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isPrime
}