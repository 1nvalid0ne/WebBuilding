const intrestRate = .03;
console.log(intrestRate);
let name = "Mark";
let age = 40;
let isApproved = true;
let firstName = undefined;
let color = null;
let person = {
  name: "Mark",
  age: 40
};
// dot notation
person.name = "John";
console.log(person.name);

// bracket notation
let selection = 'name';
person[selection] = 'Mary';
console.log(person.name);
// arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

// functions
function greet(name, lastName) {
  //body of function
  console.log("hello " + name + '  '+  lastName);
}
// how to call a function
greet('John', 'Smith');

//calculating a value
fuction square(number){
  return number * number;
}
let number = square(2);
console.log(number);
