// recap---!
function cashOut(taka) {
    if (typeof taka !== "number") {
        return "INVALID NUMBER"
    }
    const vat = 1.75;
    const totalVat = taka * vat / 100;
    return totalVat;
}
console.log(cashOut("100"))