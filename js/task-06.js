const inputText = document.querySelector("#validation-input");

const valueOfAtribute = Number(inputText.getAttribute("data-length"));

inputText.addEventListener("blur", resultOfBlur);

function resultOfBlur(event) {
  const lengthValue = event.currentTarget.value.length;
  if (lengthValue < valueOfAtribute) {
    return inputText.classList.add("invalid");
  }
  inputText.classList.remove("invalid");
  return inputText.classList.add("valid");
}
