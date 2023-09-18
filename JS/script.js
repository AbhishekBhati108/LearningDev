/* 
// Clouser exapmle
function x() {
  const a = 10;
  function y() {
    console.log(a);
  }
  //it not simply return function but form a bundle of function and it lexical scope
  return y;
}
const z = x();
// z();

// SetTimeout and clouser example
function x1() {
  const x = 1;
  setTimeout(function () {
    console.log(x);
  }, 3000);
  console.log("Namaste JS");
}
// x1();

// Q: Make counter
function counter() {
  // var is not work here because it it not blocked scope
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
//counter();

// Using var
function counter1() {
  // it work because var is function scoped
  for (var i = 1; i <= 5; i++) {
    function helper(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    helper(i);
  }
}
counter1();
 */

// First Class Function
