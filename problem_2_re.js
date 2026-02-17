/**
 * এই বার কাজ হলো নামে validContact() একটা ফাঙ্কশন তৈরি কর, যা কিছু শর্তের ভিত্তিতে যাচাই করবে  একটা  contact number ভ্যালিড কিনা। একটি  contact number ভ্যালিড হবার শর্ত হলো:
১। contact number টি অবশ্যই  ১১ ডিজিট এর হতে হবে 
২। contact number টি  শুরু হবে  "০১" দিয়ে 
৩। contact number এ কোন ফাঁকা থাকা যাবে না 
উপরের শর্ত গুলো পূরণ হলে সে ture return করবে আর পূরণ না হলে false  return করবে ?
javascript 
মারা যাওয়া 
আমি প্রতিশ্রুতি বন্ধ 
 */

function validContact(contact) {
  // jodi input string na hoy thaole "Invalid" string korbe!!
  if (typeof contact !== "string") {
    return "Invalid Number";
  }
  // শর্ত ১: অবশ্যই ১১ ডিজিট হতে হবে
  if (contact.length !== 11) {
    return false;
  }
  // শর্ত ২: শুরু হবে "01" দিয়ে
  else if (!contact.startsWith("01")) {
    return false;
  }
  // শর্ত ৩: কোন ফাঁকা থাকবে না
  else if (contact.includes(" ")) {
    return false;
  }
  // সব শর্ত পূরণ হলে true রিটার্ন করবে
  else {
    return true;
  }
}
console.log(validContact("01773632880"));
console.log(validContact(4546));
