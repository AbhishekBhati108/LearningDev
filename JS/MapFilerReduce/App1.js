const users = [
  { firstName: "Abhishek", lastName: "Bhati", age: 23 },
  { firstName: "Aditi", lastName: "Thakur", age: 22 },
  { firstName: "Maddy", lastName: "Ye", age: 26 },
  { firstName: "Akshay", lastName: "Saini", age: 26 },
];

const fullName = users.map((x) => x.firstName + " " + x.lastName);
console.log(fullName);

// Q. make {23: 1, 22: 1, 26: 2}

const output = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output);

// Q: Find firstName of all people whose age < 24

const ageLess24 = users.filter((x) => x.age < 24).map((x) => x.firstName);
console.log(ageLess24);

// solving using reduce
const name24 = users.reduce((acc, curr) => {
  if (curr.age < 24) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(name24);
