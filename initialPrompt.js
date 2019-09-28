'use strict';
// input: (name, origin, ingredients)
// work:v
// output:"<article class=burger>


var wantsToAddRecipe = prompt('Do you want to add new recipe?');

if (wantsToAddRecipe === 'yes'){document.write('Check out the Additional Recipes page!');
} else {
  document.write('I hope you enjoy the recipes!');
}