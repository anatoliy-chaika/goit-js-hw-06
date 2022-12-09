function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const span = document.querySelector(".color");
const buttonChange = document.querySelector(".change-color");

buttonChange.addEventListener("click", getResult);

function getResult(event) {
  span.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
  console.log(body);
}
