const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", rangeValue);

function rangeValue(event) {
  const range = event.currentTarget.value;
  text.style.fontSize = `${range}px`;
}
