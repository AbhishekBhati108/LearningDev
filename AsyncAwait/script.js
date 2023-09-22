/* 
* What is async ?
* What is await ?
* How async await work behind the scenes ?
* Example of using async/await
* Error handling
* Interviews
* Async await vs Promise.then/.catch

*/

const promise = new Promise((resolve, reject) => {
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
  const val = await promise;
  console.log("Namaste JS");
  console.log(val);
}
handlePromise();

// Handling promise in older way
// function getData() {
//   promise.then((res) => console.log(res));
//   console.log("ok");
// }
// getData();
console.log("stop");
