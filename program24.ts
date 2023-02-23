//Tests for equality and inequality with strings
let bikye = "honda";
console.log("is bikye == 'honda' ? i predict true");
console.log(bikye == 'honda');
console.log("is bikye == 'suziki' ? i predict false");
console.log(bikye == 'suziki');
console.log("is bikye != 'honda' ? i predict false");
console.log(bikye != 'honda');
console.log("is bikye != 'suziki' ? i predict true");
console.log(bikye != 'suziki');
//Tests using the lower case function
bikye="HONDA";
console.log("is bikye == 'honda' ? i predict true");
console.log(bikye.toLowerCase() == 'honda');
console.log("is bikye == 'Honda' ? i predict false");
console.log(bikye.toLowerCase() == 'Honda');
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let numbr = 45;
//test 1
console.log("is number == 45 ? i predic true");
console.log(numbr==45);
//test 2
console.log("is number != 45 ? i predic false");
console.log(numbr!=45);
//test 3
console.log("is number <= 65 ? i predic true");
console.log(numbr<=65);
//test 4
console.log("is number >= 35 ? i predic true");
console.log(numbr>=45);
//test 5
console.log("is number > 55 ? i predic false");
console.log(numbr>45);
//test 6
console.log("is number < 47 ? i predic true");
console.log(numbr<47);
//test 7
console.log("is number == 45 && number < 55 ? i predic true");
console.log(numbr==45 && numbr < 55);
//test 8
console.log("is number != 45 || number > 67 ? i predic false");
console.log(numbr != 45 || numbr > 67);
// test 9
console.log("Is number === '10'? I predict false.");
console.log(numbr === 10);
// test 10
console.log("Is number !== 45? I predict false.");
console.log(numbr !== 45);
// Test whether an item is in a array
let _array = ["pizza","burger","snacks","fries","lzaniya"];
console.log("is array == burger ? i predict true");
console.log(_array.includes("burger"));
console.log("is array == loaded fries ? i predict false");
console.log(_array.includes("loaded fries"));

