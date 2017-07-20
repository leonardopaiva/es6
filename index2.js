const sayHello = name => `Hello ${name}`;
// var sayHello = (name) => `Hello ${name}`;

// function sayHello() {
//   return 'Hello';
// }

const printHello = (name) => {
  console.log(`Hello ${name}`);
};

const getSiblings = n => ({ previous: n - 1, next: n + 1 });

console.log(sayHello('Jose'));
printHello('Leonardo');
console.log(getSiblings(3));