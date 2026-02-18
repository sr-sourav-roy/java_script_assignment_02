// notun kore but kichu changes ache!
// 
function validEmail(email) {
  // check this string number!
  if (typeof email !== "string") {
    return "Invalid Number";
  }
  // ei jaygay [" - . "] thaka jabe nah
  if (email.startsWith("-") || email.startsWith(".")) {
    return false;
  }
  // ei jaygay ["_ + @"] thaka jabe nah
  else if (
    email.startsWith("_") ||
    email.startsWith("+") ||
    email.startsWith("@")
  ) {
    return false;
  }
  // majhe konw faka rakha jabe nah
  else if (email.includes(" ")) {
    return false;
  }
  // Seshe oboishoi  .com thakte lagbe
  else if (!email.endsWith(".com")) {
    return false;
  }
  // and @ thakte lagbe
  else if (!email.includes("@")) {
    return false;
  }
  // sob requirement tik thakle output true dibe
  return true;
}
console.log(validEmail("souravroy@.com"))
console.log(validEmail(".souravroy@.com"))
console.log(validEmail("+souravroy@.com"))
console.log(validEmail("_souravroy@.com"))
console.log(validEmail("-souravroy@.com"))
console.log(validEmail(["souravroy@.com"]))