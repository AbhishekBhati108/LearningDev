// setTimeout example
/* console.log("start");

setTimeout(function cb() {
  console.log("call back");
}, 5000);

console.log("end");
 */

// fetch example
console.log("start");

setTimeout(function cbT() {
  console.log("CB setTimeout");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB netflix");
});

console.log("End");
