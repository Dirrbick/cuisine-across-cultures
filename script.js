'use strict';

var username = prompt('Welcome! What is your name?');

console.log(username);
console.log('Welcome, Chef  ' + username + '!');


document.write('<p>Welcome, Chef  ' + username + '<p>');

var wantToEat = prompt('We are so glad you are hear. How many years of cooking experience do you have?');

if (wantToEat > 3){
  document.write('<p>Enjoy our recipes! Feel free to email suggestions.</p>');
} else {
  document.write('<p>We hope you enjoy our dishes! Feel free to contact us on any questions with the recipes.</p>');
}

function makeSandwich (meat, cheese, bread) {
//  work goes in here
var newSandwich =  'Here is your beautiful sandwich. It has ' + meat + ' 'and ' + cheese + 'on' + bread + '.'';
// tell JavaScript to return
return newSandwich;
}

// "call" (or run) the function with these specific input values (aka "arguments")
var korySandwich = makeSandwich("turkey", "pepperjack", "wheat");
console.log(korySandwich);
