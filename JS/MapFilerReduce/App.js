const arr = [5, 1, 2, 6, 4];

// Map() method
/* function binary(x) {
  return x.toString(2);
}

console.log(arr.map(binary));

const newArr = arr.map((i, x) => x + i);
console.log(newArr); */

// Filter method
// console.log(arr.filter((x) => x % 2));

// Reduce method
const output = arr.reduce((acc, curr) => (acc += curr), 0);
console.log(output);

const max = arr.reduce((acc, curr) => {
  if (curr > acc) acc = curr;
  return acc;
}, -1);
console.log(max);
