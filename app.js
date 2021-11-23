console.log("hi")
var message = 'Hello Node!';

var sum = 5 + 3;

console.log(message);
console.log(sum);
var commandLineArgs = process.argv;
console.log(commandLineArgs);
// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);
// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);
// const message = 'Hello Node!';
// message = 'Goodbye Node!';

// const sum = 5 + 3;
// sum += 1;
const animalArray = ['dog', 'cat', 'pig'];

animalArray.push('cow');

const personObj = {
  name: 'Lernantino',
  age: 99
};

personObj.age = 100;
personObj.occupation = 'Developer';