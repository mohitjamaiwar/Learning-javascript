let score = "mohit"
console.log(typeof score)

let valueinNUmber = Number(score)
console.log(typeof valueinNUmber)
console.log(valueinNUmber)

/*
toNumber conversion:
"33" => 33
"33abc" => NaN
"abc33" => NaN
"abc" => NaN
undefined => NaN
null => 0
true => 1
false => 0
toBoolean conversion:
"" => false
"mohit" => true (from string to boolean)
0 => false
1 => true
-1 => true
to string conversion:
33 => "33"
true => "true"
false => "false"
null => "null"
undefined => "undefined"
*/

// *******************************OPERATORS IN JAVASCRIPT*******************************
let value = 3
let negValue = -value
// console.log(negValue)
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2)
// console.log(2**3)

let str1 = "Hello"
let str2 = " World"
// console.log(str1 + str2)

// console.log(2 + "2") // "22"
// console.log("1" + 2 + 2) // "122"
// console.log(2 + 2 + "1") // "41"
// console.log(2 - "2") // 0
// console.log(2 * "2") // 4
// console.log(2 / "2") // 1
// console.log(2 % "2") // 0
// console.log(2 ** "3") // 8

console.log(+true)
console.log(+"");

let gameCounter = 100
gameCounter++
console.log(gameCounter)