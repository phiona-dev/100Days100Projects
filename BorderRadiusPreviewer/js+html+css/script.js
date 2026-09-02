const topLeft = document.getElementById("top-left")
const topRight = document.getElementById("top-right")
const bottomRight = document.getElementById("bottom-right")
const bottomLeft = document.getElementById("bottom-left")

const applyChangesBtn = document.getElementById("apply-changes")
const previewButton = document.getElementById("button-previewer")
const styling = document.querySelector(".styling")
const copyBtn = document.getElementById("copy-btn")

applyChangesBtn.addEventListener("click", () => {

    let topLeftValue = topLeft.value;
    let topRightValue = topRight.value;
    let bottomRightValue = bottomRight.value;
    let bottomLeftValue = bottomLeft.value;


    Object.assign(previewButton.style, {
        borderTopLeftRadius: `${topLeftValue || 0}px`,
        borderTopRightRadius: `${topRightValue || 0}px`,
        borderBottomRightRadius: `${bottomRightValue || 0}px`,
        borderBottomLeftRadius: `${bottomLeftValue || 0}px`
    })

     const updatedStyles = `Object.assign(previewButton.style, {
        borderTopLeftRadius: "${topLeftValue || 0}px",
        borderTopRightRadius: "${topRightValue || 0}px",
        borderBottomRightRadius: "${bottomRightValue || 0}px",
        borderBottomLeftRadius: "${bottomLeftValue || 0}px"
    })`

    styling.textContent = updatedStyles

    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(updatedStyles)
            .then(() => alert("Styling copied successfully!"))
            .catch(err => console.error("An error occurred", err))
    })

    
})

