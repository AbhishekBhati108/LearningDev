// const cart = ["pants", "curta", "shoes"];

// createOrder(cart, function (orderID) {
//   proceedToPayment(orderID);
// });

// const promise = createOrder(cart);

// promise.then(function (orderID) {
//   proceedToPayment(orderID);
// });

const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const user = fetch(GITHUB_API);
console.log(user);
