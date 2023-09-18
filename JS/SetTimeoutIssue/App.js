// It is cuncurrency modal concept
console.log("Start");

setTimeout(function cb() {
  console.log("callback");
}, 4000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}
console.log("While expires");
