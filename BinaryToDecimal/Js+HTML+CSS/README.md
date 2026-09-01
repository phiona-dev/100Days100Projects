# Binary to Decimal Converter
## Overview

**BinaryToDecimal** allows users to enter a binary number containing up to **8 digits** (`0` and `1`) and converts it into its decimal equivalent.

For example:

```text
Binary: 1011
Decimal: 11
```

The conversion is performed manually using JavaScript rather than using JavaScript's built-in `parseInt()` binary conversion.

## Features

* Accepts binary numbers of up to 8 digits
* Validates that the input contains only `0` and `1`
* Displays an alert when invalid characters are entered
* Converts binary numbers of different lengths
* Displays the decimal result in the output field
* Does not use an array to store the binary digits

## How It Works

The application first retrieves the value entered by the user:

```js
const currentValue = binaryInput.value
```

It then checks whether the input contains more than 8 digits:

```js
if (currentValue.length > 8) {
    alert("Only 8 digit values are allowed")
    return;
}
```

Next, the application loops through the binary digits and checks whether each character is either `0` or `1`:

```js
if (currentValue[x] !== "0" && currentValue[x] !== "1") {
    alert("Enter ONLY 0's and 1's")
    return
}
```

For valid binary digits, each digit is multiplied by the appropriate power of 2:

```js
decimalResult += Number(currentValue[x]) * 2 ** i
```

The results are then added together to produce the decimal equivalent.

For example:

```text
1011

= (1 × 2³) + (0 × 2²) + (1 × 2¹) + (1 × 2⁰)

= 8 + 0 + 2 + 1

= 11
```

Finally, the result is displayed in the output element:

```js
finalDecimalOutput.textContent = decimalResult;
```

## Technologies Used

* HTML
* CSS
* JavaScript

## What I Learned

Through this project, I practiced:

* Working with the DOM using `getElementById()`
* Handling button click events with `addEventListener()`
* Retrieving and validating user input
* Working with strings and individual characters
* Using `for` loops
* Using conditional statements
* Converting strings to numbers with `Number()`
* Understanding binary positional notation
* Using powers of 2 to calculate decimal values
* Displaying dynamically generated results on a webpage

## Credits

This project was inspired by the Bin2Dec project from:

Florin Pop — App Ideas Collection

Original repository: https://github.com/florinpop17/app-ideas
