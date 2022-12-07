const getInformation = function() {
    const numberOfCategories = document.querySelectorAll("#categories li.item").length
    console.log(`Number of categories: ${numberOfCategories}`);

    const title = document.querySelectorAll("h2")
    console.log(`Category: ${title[0].textContent}`) 
    
    const nubersOfLi = document.querySelectorAll(".item");
    console.log(nubersOfLi)


}

getInformation();

