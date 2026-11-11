"use strict";
function greeter(person) {
    return "Hello, " + person;
}
let userName = "Brody Forsythe";
let greeting = document.querySelector('.greeting');
if (greeting) {
    greeting.textContent = greeter(userName);
}
