'use strict';

var button = document.createElement('button');
button.innerHTML = 'Create Recipe';

var body = document.getElementsByTagName('body')[0];
body.appendChild(button);

button.addEventListener ('click', function() {
  alert('did something');
});