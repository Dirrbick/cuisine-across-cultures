'use strict';
// input: (name, origin, ingredients)
// work:v
// output:"<article class=burger>

function createRecipe (name, origin, ingredients) {
  var newRecipe = '<article>' +
        '<img src=burger.jpg>' +
        '<h3>' +
        name +
        '</h3>' +
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
  var recipeOrigin = prompt('Which region is this from?');
  var recipeIngredients = prompt('Please list the ingredients.');

  var newRecipeHTML = createRecipe(recipeName, recipeOrigin, recipeIngredients);

  document.write(newRecipeHTML);


}
