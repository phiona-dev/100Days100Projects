# Binary to Decimal Converter

The purpose of this project was to practice building an interactive application with React while strengthening my understanding of binary number conversion.

The application allows users to enter a binary number containing up to 8 digits and calculates its decimal equivalent using the positional value of each binary digit.

For example:

```text
1011₂ = 11₁₀
```

## Features

* Accepts binary numbers of up to 8 digits
* Validates that the input contains only `0` and `1`
* Notifies the user when invalid input is entered
* Converts binary numbers into decimal manually
* Displays the conversion result dynamically
* Supports binary numbers with different numbers of digits

## Technologies Used

* React
* JavaScript
* CSS
* HTML

## How It Works

### State Management

The application uses React's `useState` hook to manage the binary input and conversion result.

```js
const [binary, setBinary] = useState("")
const [result, setResult] = useState(null)
```

The `binary` state stores the user's input, while `result` stores the calculated decimal value.

### Input Validation

The `handleChange` function is triggered whenever the user changes the input.

Each character is checked to ensure that it is either `0` or `1`.

```js
for (let x = 0; x < value.length; x++) {
  if (value[x] !== "0" && value[x] !== "1") {
    alert("Only 0's and 1's allowed")
    return
  }
}
```

The application also checks that the binary number does not exceed 8 digits.

```js
if (value.length > 8) {
  alert("Only 8 digits or less are allowed")
  return
}
```

### Binary Conversion

When the user clicks the Convert button, the application processes the binary number from right to left.

```js
let decimal = 0;
let power = 0;

for (let x = binary.length - 1; x >= 0; x--) {
  decimal = decimal + (Number(binary[x]) * 2 ** power)
  power++
}
```

The rightmost digit represents `2⁰`, with each position to the left representing the next power of 2.

For example:

```text
1011

= (1 × 2³) + (0 × 2²) + (1 × 2¹) + (1 × 2⁰)

= 8 + 0 + 2 + 1

= 11
```

The calculated value is then stored in the `result` state:

```js
setResult(decimal)
```

React then updates the displayed result.

## React Concepts Practiced

This project provided practice with:

* Functional components
* `useState`
* Controlled inputs
* Event handling
* `onChange`
* `onClick`
* State management
* Conditional statements
* `for` loops
* String indexing
* Type conversion
* Dynamic rendering

## What I Learned

This project helped me understand how to combine a mathematical problem with React's component and state-based approach.

The binary conversion is based on positional notation, where each binary digit represents a power of 2 depending on its position.

Implementing the conversion manually rather than using a built-in conversion method helped me better understand how binary numbers are converted into decimal values.

Building the project with React also gave me practice managing user input, validating data, handling events, and updating the interface based on state changes.


## Credits

This project was inspired by the **Bin2Dec** project from:

**Florin Pop — App Ideas Collection**

Original repository: https://github.com/florinpop17/app-ideas

The original repository provided the project idea and requirements. This React implementation was created independently as a learning project.
