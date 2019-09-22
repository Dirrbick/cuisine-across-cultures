'use strict';

var username = prompt('Welcome! What is your name?');

console.log(username);
console.log('Hi, ' + username + '!');


document.write('<p>Hi, Chef  ' + username + '<p>');

var wantToEat = prompt('We are so glad you are hear. Is your name Michael Aunspaugh? Type Yes/No');

if (wantToEat === 'Yes'){
  document.write('<p>Miss you Bro!.</p>');
} else {
  document.write('<p>Thank you for stopping by, we hope you can enjoy some of the dishes!</p>');
}