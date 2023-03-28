// Square brackets are used to select the data atrribute
const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

const MIN_NUMBER = -5
const MAX_NUMBER = 15
const STEP_AMOUNT = 5

// Event handlers, they listen and do what they've been told
const subtractHandler =  () => {
    const newValue = parseInt(number.value) - STEP_AMOUNT
    number.value = newValue

    if (add.disabled === true) {
        add.disabled = false
    }

    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
    }
}

const addHandler = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT
    number.value = newValue

    if (subtract.disabled === true) {
        subtract.disabled = false
    }

    if (newValue >= MAX_NUMBER) {
        add.disabled = true
    }
}

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)