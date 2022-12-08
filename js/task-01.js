const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

const categories = document.querySelectorAll("h2");

function get() {
  for (let i = 0; i < categories.length; i += 1) {
    const element = i;
    const text = categories[element].textContent;
    console.log(`Category:  ${text}`);
    const numbers = numberOfCategories[element].querySelectorAll("li").length;
    console.log(`Elements: ${numbers}`);
  }
}

get();
