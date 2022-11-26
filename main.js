/*const pI = 3.14;
document.getElementById("pI").innerHTML = pI;

console.log(pI);

let x = 22;
let y = 7;
let z = x / y;

document.getElementById("demo").innerHTML = z;
console.log(z);

let countryName = ["Nigeria", "England", "Portugal", "Spain"];

document.getElementById("num2").innerHTML = countryName;

console.log(countryName);

let age = ["12", "13", "14", "15"];

document.getElementById("num3").innerHTML = age;

console.log(age);

const name1 = "Adeosun";
const name2 = "olumide";
const name3 = name1 + " " + name2;

document.getElementById("num4").innerHTML = name3;

console.log(name3);

//saturday class 10/15/22

/*1. create an object using the const keyword and the object should be of your own Identity
2. create a fuction that returns an object and the object should have a method() and the object should be based on a car
3. create a Precedence operation and the answer should be 99000 and you should use three arithmetics operator.
4. create a boolean data type and determine if it's true or false using logical operator.
5. create a function that has two parameters and assign the function to a const varible
All of this assignment should show on the console.log and on the home page. */

//solution
/*
const information = {
  firstName: "adeosun",
  lastName: "olumide",
  age: 15,
  eyeColor: "black",
  class: "ss2",
};
document.getElementById("information").innerHTML = information;

console.log(information);

var car = {
  Model: "toyota",
  type: "Highlander",
  color: "cream",
  carinformation: function () {
    return this.Model + " " + this.type + " " + color;
  },
};
document.getElementById("car").innerHTML = car.Model + " " + "<br/>" + car.type;
console.log(car);

var number = (90000 + 9000) * 1;

document.getElementById("number").innerHTML = (90000 + 9000) * 1;
console.log(number);

var h = 5;
var j = 5;
var g = 6;
document.getElementById("va").innerHTML = (h == j) + +(h == g);
console.log(h == j) + "<br>" + (h == g);


function myFunction(p1, p2) {
  return p1 * p2;
}

const myFunc = myFunction(10, 10);

myFunctions.innerHTML = myFunc;
*/

// let text1 = "Adeosun";
// let text2 = "Olumide";
// let text3 = "Jeremiah";
// let text4 = text1.concat(" ", text2, text3);
// document.getElementById("demose").innerHTML = text4;
// console.log(demose);

// function myFunction() {
//   let str = document.getElementById("demos").innerHTML;
//   let txt = str.replace("olumide", "OLUMIDE");
//   document.getElementById("demos").innerHTML = txt;
//   console.log(txt);
// }

// BTN.addEventListener("click", myFunction);

// var str = document.getElementById("demoses");
// var str = "Apple, mango, cherry";
// var res = str.slice(7, 12);
// document.getElementById("demoses").innerHTML = res;
// console.log(demoses);

// var txt = "A1234567890-sdfgl;'wertyuiop";
// var sn = txt.length;
// document.getElementById("democra").innerHTML = sn;
// console.log(democra);

// var str = document.getElementById("demos").innerHTML;
// var txt = str.replace("olumide", "OLUMIDE");
// document.getElementById("demos").innerHTML = txt;
// console.log(txt);
/*
const button = document.getElementById("BTN");
const Text = document.getElementById("demos");

// const a = "bvhbkjvhjdbjvh djbkhvdbhvhdb";
// const Trima = a.trim();

function myFunction() {
  let text = document.getElementById("demos").innerHTML;
  document.getElementById("demos").innerHTML = text.replaceAll(
    "olumide",
    "OLUMIDE"
  );
}

button.addEventListener("click", myFunction);

let firstText = "Hello ";
let secondText = "world ";
let lastText = " MyWolrd";

let allText = firstText.concat("", secondText, lastText);

console.log(allText);
*/

let car = [
  "toyota",
  "mazda",
  "tacoma",
  "highlander",
  "corolla",
  "lambogini",
  "micra",
  "toyota",
  "mazda",
  "tacoma",
  "highlander",
  "corolla",
  "mazda",
  "toyota",
  "mazda",
  "tacoma",
  "highlander",
  "corolla",
  "lambogini",
  "micra",
];
const d = new Date()

const newCars = car.slice(0, 10);

BTN.addEventListener("click", function () {
  document.getElementById("model").innerHTML = d;
});

document.getElementById("model").innerHTML = car;

let fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("mode").innerHTML = text;

console.log(text);

let number = (3000 + 410) * 2;

document.getElementById("number").innerHTML = number;
console.log(number);
