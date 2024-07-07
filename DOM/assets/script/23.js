/*

//DOM
//Document Object Model
// brower convert html code in an object and it's object called document

get elemenet by id

query selector
query selector all



*/
/*
console.log('using window and log');
console.log(window.document);
console.log('using window and dir');
console.dir(window.document);

*/


// get element by id
console.log('Get Element by ID');

console.log(document.getElementById("main-heading"));
console.log(typeof document.getElementById("main-heading"));

console.log('store object using get element by it')
const mainHeadingid = document.getElementById("main-heading");
console.log(mainHeadingid);


// get element by query
// console.log("<br><br>select element by using Query");
const mainHeadingQ = document.querySelector("#main-heading");
console.log(mainHeadingQ);

const htmHeaderClass=console.log(document.querySelector(".header"));
console.log(htmHeaderClass);

console.log('to select all class of same name we use queryselectorAll')

console.log(document.querySelectorAll('.form-group'));


console.log('to change text use text content and inner text')
// textContent show or return all content also hidden while innerText don't show or return hidden content
console.log(`showing content using text content: ${mainHeadingQ.textContent}`);
console.log(`show content using inner text: ${mainHeadingQ.innerText}`);
mainHeadingQ.textContent="manage your today task";
console.log(mainHeadingQ.textContent);
