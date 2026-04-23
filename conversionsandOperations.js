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

