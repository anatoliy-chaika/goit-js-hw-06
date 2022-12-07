const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const getUl = document.querySelector("#ingredients")


const createMarcup = ingredients.map((item, index) => {
const newMarcup = document.createElement("li");
newMarcup.classList.add("item");
newMarcup.textContent = ingredients[index];
return newMarcup
})
getUl.append(...createMarcup)






