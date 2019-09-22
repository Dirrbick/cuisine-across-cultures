'use strict';

var username = prompt('Welcome! What is your name?');

console.log(username);
console.log('Hi, Chef ' + username + '!');


document.write('<p>Hi, ' + username + '<p>');

var wantToEat = prompt('We are so glad you are hear. Are you new to different cuisines?');

if (wantToEat === 'Yes'){
  document.write('<p>We are so excited! Head over to one of the regions to find out more.</p>');
} else {
  document.write('<p>Thank you for stopping by, we hope you can enjoy some of the dishes!</p>');
}