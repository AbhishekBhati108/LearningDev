"use strict";

a();
// b(); // it give type error because b act like a variable

// Function statement
function a() {
  console.log("a is called");
}

// Function expression
const b = function (parameter1, parameter2) {
  console.log("b is called");
};

// Anonymous function
// function (){

// }

// Named function expression
const x = function xyz() {
  console.log(xyz);
};

x();
// xyz(); // give refernce error because it is not in global scope
