const increaseButton = document.querySelector('[data-action="increment"]')
const decreaseButton = document.querySelector('[data-action="decrement"]')
const spanValue = document.querySelector('#value')

let value = 0;

increaseButton.addEventListener('click', clickIncreaseButton)

function clickIncreaseButton() {
    value += 1
    spanValue.textContent = value;
}

decreaseButton.addEventListener('click', clickdecreaseButton)

function clickdecreaseButton() {
    value -= 1
    spanValue.textContent = value;
}

