# Border-Radius Previewer

A simple web application that allows users to experiment with CSS `border-radius` values and preview how they affect the shape of an element.

This project was inspired by the **Border-radius Previewer** project from [Florin Pop's App Ideas Collection](https://github.com/florinpop17/app-ideas).

## About the Project

The purpose of this project was to practice working with CSS properties through JavaScript and build an interactive interface that responds to user input.

The application allows users to enter values for the four corners of a box, apply the changes, and view the resulting CSS. Users can also copy the generated CSS to the clipboard.

## Features

* Adjusts the top-left border radius
* Adjusts the top-right border radius
* Adjusts the bottom-right border radius
* Adjusts the bottom-left border radius
* Applies the entered values to the preview element
* Displays the resulting CSS
* Copies the generated CSS to the clipboard
* Uses `0px` when a corner is left empty

## Technologies Used

* HTML
* CSS
* JavaScript

## How It Works

### Selecting Elements

The application first retrieves the input fields, preview element, and buttons from the DOM.

```js
const topLeft = document.getElementById("top-left")
const topRight = document.getElementById("top-right")
const bottomRight = document.getElementById("bottom-right")
const bottomLeft = document.getElementById("bottom-left")
```

These elements are used to collect user input and update the preview.

### Applying Border-Radius Values

When the user clicks the **Apply Changes** button, the application retrieves the values entered for each corner.

```js
let topLeftValue = topLeft.value;
let topRightValue = topRight.value;
let bottomRightValue = bottomRight.value;
let bottomLeftValue = bottomLeft.value;
```

The values are then applied to the preview element using `Object.assign()`.

```js
Object.assign(previewButton.style, {
    borderTopLeftRadius: `${topLeftValue || 0}px`,
    borderTopRightRadius: `${topRightValue || 0}px`,
    borderBottomRightRadius: `${bottomRightValue || 0}px`,
    borderBottomLeftRadius: `${bottomLeftValue || 0}px`
})
```

The `|| 0` ensures that an empty input defaults to `0px`.

### Generating the CSS

The application also creates a CSS string representing the applied border-radius values.

```js
updatedStyles = `border-radius: ${topLeftValue || 0}px ${topRightValue || 0}px ${bottomRightValue || 0}px ${bottomLeftValue || 0}px;`
```

For example, entering:

```text
Top-left: 20
Top-right: 40
Bottom-right: 60
Bottom-left: 80
```

produces:

```css
border-radius: 20px 40px 60px 80px;
```

The generated CSS is displayed in the interface.

### Copying the CSS

The application uses the Clipboard API to allow users to copy the generated CSS.

```js
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(updatedStyles)
        .then(() => alert("Styling copied successfully!"))
        .catch(err => console.error("An error occurred", err))
})
```

When the copy button is clicked, the current CSS string is written to the clipboard.

## Concepts Practiced

This project helped me practice:

* DOM manipulation
* Selecting elements with `getElementById()`
* Handling button click events
* Retrieving values from input fields
* Updating CSS properties with JavaScript
* Using `Object.assign()`
* Working with template literals
* Using the `||` operator for default values
* Generating CSS dynamically
* Using the Clipboard API
* Handling promises with `.then()` and `.catch()`

## What I Learned

This project helped me understand how JavaScript can be used to dynamically control CSS properties.

Instead of changing the styles manually in a stylesheet, I learned how to retrieve user input and apply those values directly to an element through JavaScript.

I also learned how to generate a CSS string from the applied values and use the Clipboard API to make the result easy to copy and reuse.

## Future Improvements

Possible improvements include:

* Adding support for all 8 border-radius values
* Updating the preview automatically as the user types
* Replacing browser alerts with inline feedback
* Adding a clear/reset button
* Improving the user interface and accessibility
* Adding support for percentage values
* Adding automated tests

## Credits

This project was inspired by the **Border-radius Previewer** project from:

**Florin Pop — App Ideas Collection**

Original repository: https://github.com/florinpop17/app-ideas

The original repository provided the project idea and requirements. This implementation was created independently as a learning project.
