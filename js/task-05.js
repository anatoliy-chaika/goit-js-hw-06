const nameLable = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

nameLable.addEventListener("input", changeInput);

function changeInput(event) {
  const text = event.currentTarget.value;

  if (!text) {
    return (span.textContent = "Anonymous");
  }
  span.textContent = text;
}
