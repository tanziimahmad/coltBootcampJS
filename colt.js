// if (1 === 1){
//  console.log("ITS true")
// }

// let rating = 2;

// if (rating < 3) {
//   console.log("JS maste");
// }

// let rating = 1;

// if (rating == 3) {
//   console.log("perfect");
// } else if (rating == 2) {
//   console.log("meets requirement");
// } else if (rating == 1) {
//   console.log("need to improve");
// } else {
//   console.log("get out");
// }

// let pass = "cmlj";

// if (pass.length >= 6) {
//   if (pass.indexOf(" ") === -1) {
//     console.log("valid password");
//   } else {
//     console.log("password is long enough,but cannot contain spaces");
//   }
// } else {
//   console.log("password must be longer");
// }

// let password = "Ivivelabs";
// if (password.length >= 8 && password.indexOf(" ") === -1) {
//   console.log("This is valid");
// } else {
//   console.log("This is invalid");
// }

// let age = 30;

// if (age < 6 || age >= 65) {
//   console.log("You get in for free");
// } else {
//   console.log("You must pay");
// }
// let day = 9;

// switch (day) {
//   case 1:
//     console.log('Monday');
//     break;
//   case 2:
//   console.log('Tuesday');
//     break;
//   case 3:
//   console.log('Wednesday');
//     break;
//   case 4:
//     console.log('Thursday');
//     break;
//   case 5:
//   console.log('Friday');
//     break;
//   case 6:
//   console.log('Saturday');
//     break;
//   case 7:
//     console.log('Sunday');
//     break;
//   default:
//     console.log('Invalid Day');

// }

// let emoji = "face";

// switch (emoji) {
//   case "sad face":
//   case "happy face":
//     console.log("yellow");
//     break;
//   case "eggplant":
//     console.log("purple");
//     break;
//   case "heart":
//   case "lips":
//     console.log("red");
//     break;
//   default:
//     console.log('Invalid choice');
// }

// let num = 7;

// num === 7 ? console.log('lucky!') : console.log('BAD');

// ARRRRRAAAYYYY

// let colors = ["red", "blue", "green", "yellow", "maroon", "violet"];

// let shoppinglist = ["milk", "bread", "butter"];
// shoppinglist[shoppinglist.length] = "jelly";
// shoppinglist[1] = 'pastry';

// console.log(shoppinglist);

// let colors = ["red", "blue", "green", "yellow", "maroon", "violet"];

// colors.push('blue');
// const target = colors.pop();

// console.log(colors);
// console.log(target);

// let colors = ["red", "blue", "green", "yellow", "maroon", "violet"];

// // colors.unshift("magenta");
// colors.shift();
// colors.shift();
// colors.shift();
// colors.shift();
// colors.shift();
// colors.shift();
// console.log(colors);

// let fruits = ['apple', 'banana'];
// let veggies = ['assparagus', 'brussel sprouts'];
// let meats = ['steak', 'chicken steak'];

// let totalList = (fruits.concat(meats, veggies));
// console.log(totalList);

// if (totalList.includes('apple')) {
//     console.log('I will take it');
// }

// console.log(totalList.indexOf('chicken steak',));

// let letters = ['q', 'w', 'e', 'r', 't', 'y', 'k', 'e', 'y'];

// letters.reverse();
// console.log(letters);

// console.log(['q', 'w', 'e', 'r', 't', 'y', 'k', 'e', 'y'].reverse());

// console.log(['q', 'w', 'e', 'r', 't', 'y', 'k', 'e', 'y'].join(''));

// let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'lion', 'tortoise'];

// let swimmers = animals.slice(0, 4);
// let mammals = animals.slice(2, 6);
// let finest = animals.slice(3, 7);
// let ending = animals.slice(5);

// console.log(swimmers,mammals,finest,ending);
// console.log(mammals);

// let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'lion', 'tortoise'];

// animals.splice(2, 0, 'Zebra');
// animals.splice(2, 2);

// console.log(animals);

let people = [
  "sammimist",
  "Tanzimistic",
  "Oeshiholic",
  2,
  true,
    ["shark", "salmon", "whale", "bear", "lizard", "lion", "tortoise"],
    ["milk", "bread", "butter"]
];

console.log(people[6][0]);
// people.sort();
// console.log(people);
