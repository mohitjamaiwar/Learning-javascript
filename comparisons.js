console.log("Comparisons in JavaScript");

// // Equality (==) vs Strict Equality (===)
// console.log("5" == 5); // true (type coercion)
// console.log("5" === 5); // false (no type coercion)
// // Inequality (!=) vs Strict Inequality (!==)
// console.log("5" != 5); // false (type coercion)
// console.log("5" !== 5); // true (no type coercion)  
// // Greater than and less than
// console.log(10 > 5); // true
// console.log(10 < 5); // false
// console.log(10 >= 10); // true
// console.log(10 <= 9); // false


//avoid following comparisons as they can lead to unexpected results due to type coercion
// Comparing different types
console.log("10" > 5); // true (type coercion)
console.log("10" < 5); // false (type coercion)
console.log(null > 0) // false (null is converted to 0)
console.log(null <= 0) // true (null is converted to 0)
console.log(null == 0) // false (null is only equal to undefined)
console.log(undefined == NaN) // false (undefined is converted to NaN)

//== works differently than other comparison opwerations ie. < > >= <= because it performs type coercion and converts the operands to a common type before making the comparison. For example, when comparing a string and a number, JavaScript will convert the string to a number before making the comparison. This can lead to unexpected results, such as "10" > 5 being true because "10" is converted to the number 10 before the comparison is made. In contrast, other comparison operators like <, >, <=, and >= do not perform type coercion and will return false when comparing different types without conversion.

// === is strict checking for both value and type, so it will return false when comparing different types without conversion. For example, "10" === 10 will return false because they are of different types (string vs number).

// Comparing objects
// const obj1 = { name: "Alice" };
// const obj2 = { name: "Alice" };
// console.log(obj1 == obj2); // false (different references)
// console.log(obj1 === obj2); // false (different references)
