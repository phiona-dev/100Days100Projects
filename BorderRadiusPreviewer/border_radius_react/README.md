# Border-Radius Previewer

A React-based tool that allows users to experiment with the four corner values of a box's border radius and preview the resulting shape.

This project was inspired by the **Border-radius Previewer** challenge from Florin Pop's App Ideas Collection.

## Overview

The Border-Radius Previewer helps users understand how CSS `border-radius` works by allowing them to enter custom values for each corner of a box.

The application displays the resulting shape and generates the corresponding CSS property, which users can copy to their clipboard.

## Features

* Enter border-radius values for four corners:

  * Top-left
  * Top-right
  * Bottom-right
  * Bottom-left
* Preview the changes on a styled button.
* Display the generated CSS `border-radius` property.
* Copy the generated CSS to the clipboard.
* Use `0px` when a field is left empty.
* Manage form data using React state.

## Technologies Used

* React
* JavaScript
* JSX
* CSS
* Clipboard API

## How It Works

### 1. Managing Form Data

The application uses React's `useState` Hook to store the four border-radius values.

```js
const [formData, setFormData] = useState({
  topLeftValue: "",
  topRightValue: "",
  bottomRightValue: "",
  bottomLeftValue: ""
});
```

### 2. Handling Input Changes

The `handleChange` function updates the specific field that the user is editing.

```js
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};
```

The spread operator preserves the other values, while the computed property name updates the selected field.

### 3. Generating the CSS

The application creates a CSS `border-radius` string using the four values:

```js
const updatedStyles = `border-radius: ${
  formData.topLeftValue || 0
}px ${
  formData.topRightValue || 0
}px ${
  formData.bottomRightValue || 0
}px ${
  formData.bottomLeftValue || 0
}px;`;
```

The values are arranged in the following order:

```text
Top-left → Top-right → Bottom-right → Bottom-left
```

### 4. Previewing the Shape

The generated values are applied directly to the preview button through React's inline styling:

```jsx
style={{
  borderRadius: `${formData.topLeftValue || 0}px ${
    formData.topRightValue || 0
}px ${
    formData.bottomRightValue || 0
}px ${
    formData.bottomLeftValue || 0
}px`
}}
```

Whenever the form data changes, React updates the preview automatically.

### 5. Copying the CSS

The `handleCopy` function uses the browser's Clipboard API to copy the generated CSS:

```js
const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(updatedStyles);
    alert("Copied!");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};
```

## Concepts Practiced

* React functional components
* React `useState`
* Controlled inputs
* Handling form events
* Updating objects in state
* JSX expressions
* Template literals
* Conditional fallback values using `||`
* Inline styling in React
* CSS `border-radius`
* Clipboard API
* Asynchronous JavaScript using `async` and `await`

## What I Learned

This project helped me understand how React manages form inputs and updates the user interface when state changes.

I also practiced using one state object to manage multiple related values, applying dynamic styles, and generating CSS from user input.


## Credits

Inspired by the Border-radius Previewer challenge from Florin Pop's App Ideas Collection.
