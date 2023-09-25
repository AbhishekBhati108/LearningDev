/* 
* What is async ?
* What is await ?
* How async await work behind the scenes ?
* Example of using async/await
* Error handling
* Interviews
* Async await vs Promise.then/.catch

*/

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is resolved");
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is resolved");
  }, 10000);
});

// async function getData() {
//   return promise;
// }
// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then((res) => console.log(res));

// Handling promise using async/await
async function handlePromise() {
  const val1 = await promise1;
  console.log("Namaste JS 1");
  console.log(val1);

  const val2 = await promise2;
  console.log("Namaste JS 2");
  console.log(val2);
}
handlePromise();

// Handling promise in older way
// function getData() {
//   promise.then((res) => console.log(res));
//   console.log("ok");
// }
// getData();
console.log("stop");
