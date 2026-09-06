const input = document.getElementById("input")
const result = document.getElementById("result")
const clearBtn = document.getElementById("clearBtn")
const clearAllBtn = document.getElementById("clearAllBtn")

let currentNumber = ""
let currentOperator = ""
let finalAnswer = 0
let currentAnswer = 0

const handleNumberClick = (data) => {
    if (currentNumber.length > 8) {
        return 
    };

    input.textContent += data
    currentNumber += data
    console.log(currentNumber)

}

const handleOperatorClick = (operator) => {
    currentOperator = operator
    input.textContent += operator
    currentAnswer = Number(currentNumber)

    currentNumber = ""
    console.log(currentOperator)
}

const calculateResult = () => {
    
    const num = Number(currentNumber);

    if (currentOperator === "+") {
        finalAnswer = currentAnswer + num
    } else if (currentOperator === "-") {
        finalAnswer = currentAnswer - num
    } else if (currentOperator === "*") {
        finalAnswer = currentAnswer * num
    } else if (currentOperator === "/"){
        finalAnswer = currentAnswer / num
    } else {
        finalAnswer = currentNumber
    }

    result.textContent = finalAnswer
}

clearBtn.addEventListener("click", () => {
    if (currentNumber !== "") {
        currentNumber = currentNumber.slice(0, -1)
        input.textContent = input.textContent.slice(0, -1)
    } else if (currentOperator !== "") {
        currentOperator = ""
        input.textContent = input.textContent.slice(0, -1)
    }

    result.textContent = ""

})

clearAllBtn.addEventListener("click", () => {
    input.textContent = ""
    result.textContent = ""
    currentNumber = ""
    currentOperator = ""
    currentAnswer = 0
    finalAnswer = 0
})
