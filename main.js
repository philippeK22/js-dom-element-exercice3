// EXERICE 8 Query selector

// 1

let recupClass = document.getElementsByClassName("redPurple");
console.log(recupClass);

// 2

let classAll = document.querySelectorAll(".redPurple");
console.log(classAll);

// 3

let selectorAll = document.querySelector("h1.redPurple");
console.log(selectorAll);

// 4

let elementAll = document.querySelectorAll("li,p,span");
console.log(elementAll);


// 5
let elementAll = document.querySelectorAll("li.important,p");
console.log(elementAll);

// 6

let elementAll = document.querySelectorAll("h1.redPurple,span.redPurple");
console.log(elementAll);

