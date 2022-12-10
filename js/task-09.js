function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const span = document.querySelector(".color");
const buttonChange = document.querySelector(".change-color");

buttonChange.addEventListener("click", changeInfo);

function changeInfo(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
}
