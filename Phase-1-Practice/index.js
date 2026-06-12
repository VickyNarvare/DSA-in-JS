// const arr = [1, 2, 3, 4, 5];
// console.table(arr); //! Console par array ko print karta hai table ke form me

// -----------------------------
//? --------------------Variables-------------------------
// -----------------------------

// const studentName = "Vicky Narvare";
// const age = 21;

//------------------------------

//* Create two variables and swap their values.

// let a = 5;
// let b = 10;
// [a, b] = [b, a];
// console.log(`a is ${a} , b is ${b}`);

//--------------------------------
//* Create a constant variable for PI and print it

// const PI = Math.PI;
// console.log(PI.toFixed(2));

//------------------------------------

//* Declare a variable without assigning a value and print it.

// var b;
// let a;
// const c; //! =>  Const variable must be initialized at the time of declaration because they cannot be reassingned later.
// console.log(a); //! Undefined
// console.log(b); //! Undefined
// console.log(c); //! Error

//-----------------------------------
//? --------------------Data-Types-------------------------
//-----------------------------------

//* Create variables of type string, number, boolean, null, and undefined.
//! directly primitive values ka prototype nahi hota hai.
// console.log(typeof "Vicky");
// console.log(typeof 9);
// console.log(typeof true);
// console.log(typeof null); //!Object -- null has no prototype . It is the end of the prototype chain in JavaScript
// console.log(typeof undefined);

//-----------------------------------------

// console.log(0.1 + 0.2 === 0.3); //!False
// console.log(0.1 + 0.2); //! 0.30000000000000004

//------------------------------------

//* Create a variable with value null and check its type.
// let a = null;
// console.log(typeof a); //!Object

//--------------------------

//* Create a bigint number and print it.
// let num = 28379759175n;
// console.log(typeof num); //! bigint

//---------------------------------
//* Convert the string "50" into a number.

// let str = "50";
// let num = Number(str);
// console.log(`String ${typeof str}`);
// console.log(`Number ${typeof num}`);

//-----------------------------------
//? --------------------Stings-------------------------
//-----------------------------------

//* 1. Create a string and print its length.
// let str = "vicky Narvare";
// console.log(str.length);

//-----------------------------------

//* 2. Convert a string into uppercase.
// console.log(str.toUpperCase());

//-----------------------------------

//* 3. Convert a string into lowercase.

// console.log(str.toLowerCase());

//-----------------------------------

//* 4. Check if a string includes the word `"JavaScript"`.
// let myStr = "Hallo i am a javascript developer";
// console.log(myStr.includes("javascript"));

//-----------------------------------

//* 5. Extract the word `"World"` from `"Hello World"`.
// let str = "Hallo World";
// console.log(str.slice(6, 12));
//-----------------------------------

//* 6. Replace `"apple"` with `"mango"` in a sentence.
// let sentence = "apple is king of fruit";
// let Newsentence = sentence.replace("apple", "Mango"); //! main string me change nhi karega new string return karga
// console.log(sentence);
// console.log(Newsentence);

//-----------------------------------

//* 7. Split `"HTML,CSS,JS"` into an array.
// let str = "HTML, CSS, JAVASCRIPT";
// let newStr = str.split(","); //! ek Array return karta hai main String me change nhi karta
// console.log(newStr);

//-----------------------------------

//* 8. Remove extra spaces from a string.
// let myName = "         Vicky Narvare      ";
// console.log(myName.trim()); //! It is only removes leading and trailling whitespace, not spaces between words.

//-----------------------------------

//* 9. Repeat the word `"Hi"` 5 times.
// let myName = "Vicky";
// console.log(myName.repeat(5));

//-----------------------------------

//* 10. Print the first character of a string.
// let myName = "Vicky";
// console.log(myName.slice(0, 1));

//-----------------------------------

//* 11. Use template literals to print:`"My name is Aman and I am 20 years old"`
// let myName = "Vicky";
// let myAge = 21;
// console.log(`My name is ${myName} and I am ${myAge} years old`);
//-----------------------------------

// ----------------------------------------------------------------------------------
