const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (!email.value || !password.value) {
    alert("You should fill both fields!");
    return;
  }
  const dataArray = {};
  dataArray.email = `${email.value}`;
  dataArray.password = `${password.value}`;
  console.log(dataArray);

  event.currentTarget.reset();
}
