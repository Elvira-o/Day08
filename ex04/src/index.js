function localScope() {
  myVariable = "I am here!";
  console.log(myVariable);
}
localScope();
console.log(myVariable);
if (typeof myVariable != "undefined") {
  console.log("outside localScope", myVariable);
} else {
  console.log("outside localScope UNDEFINED!!!");
}

module.exports = localScope;
