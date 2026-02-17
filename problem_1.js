// function signature/sample
// Tumi jehetu ekjon dokkhow program, tomar kaj calcutateVAT() namer ekti function toiei kora, ja konow ponner mullllow input nile randomliy tar vat hisab kore dibe?

function calculateVAT(price) {
    if (typeof price !== "number") {
        return "invalid"
    }
    const to_vat = price * 7.5 / 100;
    return to_vat
}
const vat = calculateVAT(200);
console.log(vat);