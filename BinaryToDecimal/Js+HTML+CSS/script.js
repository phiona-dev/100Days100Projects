const binaryInput = document.getElementById("binary-input")
const decimal = document.getElementById("decimal-value");
const submitButton = document.getElementById("submit-button")


submitButton.addEventListener("click", () => {
    const currentValue = binaryInput.value
    console.log(currentValue)

    let decimalOutput = 0

    if (currentValue.length > 8) {
        alert("Only 8 digit values are allowed")
        return;
    }

    for (let x = currentValue.length - 1; x >= 0; x--) {
        if (currentValue[x] !== "0" && currentValue[x] !== "1") {
            console.log(currentValue[x])
            alert("Enter ONLY 0's and 1's")
            return
        } else {
            for (let i=0; i<currentValue.length; i++) {
                decimalOutput += Number(currentValue[x]) * 2 ** i
                x--;
            }
        }
    }
    console.log(decimalOutput)

    decimal.textContent = decimalOutput;
})
