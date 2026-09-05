const input = document.getElementById("input")
const result = document.getElementById("result")
const clearBtn = document.getElementById("clearBtn")
const clearAllBtn = document.getElementById("clearAllBtn")

let currentNumber = ""
let currentOperator = ""
let finalAnswer = 0
let currentAnswer = 0

const handleNumberClick = (data) => {
    input.textContent += data
    currentNumber += data
    console.log(currentNumber)
}

const handleOperatorClick = (operator) => {
    if (currentNumber === "") return
    currentOperator = operator
    input.textContent += operator
    currentAnswer = Number(currentNumber)
    currentNumber = ""
    console.log(currentOperator)
}

const calculateResult = () => {
    if (currentNumber === "" || currentOperator === "") return
    const num = Number(currentNumber);

    if (currentOperator === "+") {
        finalAnswer = currentAnswer + num
    } else if (currentOperator === "-") {
        finalAnswer = currentAnswer - num
    } else if (currentOperator === "*") {
        finalAnswer = currentAnswer * num
    } else {
        finalAnswer = currentAnswer / num
    }

    result.textContent = finalAnswer
}

clearBtn.addEventListener("click", () => {
    input.textContent = input.textContent.slice(0, -1)
    currentNumber = input.textContent
    console.log(currentNumber)
})

clearAllBtn.addEventListener("click", () => {
    input.textContent = ""
    result.textContent = ""
})

const myFunction = (event) => {
    if (event.key == "0" || event.key == "1" || event.key == "2" ||
        event.key == "3" || event.key == "4" || event.key == "5" ||
        event.key == "6" || event.key == "7" || event.key == "8" ||
        event.key == "9" || event.key == "+" || event.key == "-" ||
        event.key == "*" || event.key == "/"
    ) {
        input.value += event.key
    }
}