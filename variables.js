console.log("Variables in JavaScript:\n")
const acountId = 1234567890 // this is a constant variable and cannot be changed
let accountEmail = "mohit@google.com" // this is a let variable and can be changed
var accountpasssword = "mohit1234" // this is a var variable and can be changed
accountCity = "Noida" // this is a "global variable" and can be changed
let accountState;

//accountId = 9876543210 // this will throw an error because acountId is a constant variable
console.log(acountId) // this will not be executed because of the error above.
accountEmail = "rohit@gmail.com"
accountpasssword = "rohit1234"
accountCity = "Delhi"
console.table({acountId, accountEmail, accountpasssword, accountCity, accountState})

/* 
Prefer not to use var.
because id issue in block scope and function scope.
*/


console.log("Variables in JavaScript:\n")
const acountId = 1234567890 // this is a constant variable and cannot be changed
let accountEmail = "mohit@google.com" // this is a let variable and can be changed
var accountpasssword = "mohit1234" // this is a var variable and can be changed
accountCity = "Noida" // this is a "global variable" and can be changed
let accountState;

//accountId = 9876543210 // this will throw an error because acountId is a constant variable
console.log(acountId) // this will not be executed because of the error above.
accountEmail = "rohit@gmail.com"
accountpasssword = "rohit1234"
accountCity = "Delhi"
console.table({acountId, accountEmail, accountpasssword, accountCity, accountState})

/* 
Prefer not to use var.
because id issue in block scope and function scope.
*/
