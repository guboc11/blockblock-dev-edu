function someFunction() {
  console.log("Some function is executed!");
}

let a = 0;
let condition = false; // true or false

for (let i = 0; i < 5; i++) {
  a = a + 1;
}

if (condition) {
  someFunction();
}

console.log("value a is", a);
