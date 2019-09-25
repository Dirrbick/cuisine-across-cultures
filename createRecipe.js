'use strict';
// input: (name, origin, ingredients)
// work:v
// output:"<article class=burger>

function createRecipe (name, time,origin, ingredients) {
  var newRecipe = '<article>' +
        '<img src=burger.jpg>' +
        '<h3>' +
        name +
        '</h3>' +
        '<li>' +
        'Cook Time: ' +
        time +
        '</li>' +
        '<li>' +
        origin +
        '</li>' +
        '<li>' +
        ingredients +
        '</li>' +
        '</article>';
  return newRecipe;
}

var wantsToAddRecipe = prompt('Do you want to add new recipe?');

if (wantsToAddRecipe === 'Yes') {
  var recipeName = prompt('What is the recipe name?');
  var recipeTime = prompt('What is the total cook time?');
  var recipeOrigin = prompt('Which region is this from?');
  var recipeIngredients = prompt('Please list the ingredients.');

  var newRecipeHTML = createRecipe(recipeName, recipeTime, recipeOrigin, recipeIngredients);

  document.write(newRecipeHTML);
}

