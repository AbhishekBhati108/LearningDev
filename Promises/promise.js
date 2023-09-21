const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function (orderID) {
    console.log(orderID);
    return orderID;
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderID) {
    return proceedToPayment(orderID);
  })
  .then(function (paymnetInfo) {
    console.log(paymnetInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function () {
    console.log("No matter what happen, it will definetly be called");
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }

    const orderID = "123345";
    if (orderID) {
      setTimeout(function () {
        resolve(orderID);
      }, 5000);
    }
  });
  return pr;
}

function proceedToPayment() {
  return new Promise(function (resolve, reject) {
    resolve("paymnet successsful");
  });
}

function validateCart(cart) {
  return false;
}
