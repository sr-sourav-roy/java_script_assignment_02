function validContact(number) {
    if (typeof number !== 'string') {
        return 'Invalid'
    }
    else if (number.length !== 11) {
        return false;
    }
    else if (number[0] !== '0' || number[1] !== '1') {
        return false;
    }
    for (let i = 0; i < number.length; i += 1) {
        if (number[i] === ' ') {
            return false;
        }
    }
    return true;
}
console.log(validContact("017736345455"));
console.log(validContact("0177363288 0"));
console.log(validContact(454545));
console.log(validContact("01773632880"));
