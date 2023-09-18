// What is callback function in Javascript

setTimeout(function () {
  console.log("timer");
}, 1000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

// Deep about Event listner
function attachEventListner() {
  let count = 0;
  document.querySelector("#clickMe").addEventListener("click", function xyz() {
    console.log("Button clicked", ++count);
  });
}
attachEventListner();
