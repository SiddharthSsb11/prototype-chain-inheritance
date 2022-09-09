
///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never do this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};
const sid = new Person('Sid', 1997);
console.log(sid);


//console.log(sid instanceof Person);

///////////////////////////////////////
// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

sid.calcAge();
//console.log(sid.__proto__);
//console.log(sid.__proto__ === Person.prototype);
//console.log(Person.prototype.isPrototypeOf(sid));
//console.log(Person.prototype.isPrototypeOf(Person));
// .prototyeOfLinkedObjects

Person.prototype.job = 'Baazi Games';
//console.log(sid.job);
//console.log(sid.hasOwnProperty('firstName'));
//console.log(sid.hasOwnProperty('job'));














// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}
















//
//
///
// chaining

//////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
//console.log(sid.__proto__);
// Object.prototype (top of prototype chain)
//console.log(sid.__proto__.__proto__);
//console.log(sid.__proto__.__proto__.__proto__);
//console.dir(Person.prototype.constructor); 
const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
//console.log(arr.__proto__ === Array.prototype);
//console.log(arr.__proto__.__proto__);
Array.prototype.unique = function () {
  return [...new Set(this)];
};
//console.log(arr.unique());
//const h1 = document.querySelector('h1');
console.dir(x => x + 1);


















