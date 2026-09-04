import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    topLeftValue: "",
    topRightValue: "",
    bottomRightValue: "",
    bottomLeftValue: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, //copy the existing state fields
      [name]: value //dynamically overwrite the specific field being changed
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("submitted data")
  }

  const updatedStyles = `border-radius: ${formData.topLeftValue || 0}px ${formData.topRightValue || 0}px ${formData.bottomRightValue || 0}px ${formData.bottomLeftValue || 0}px;`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(updatedStyles)
      alert("Copied!")
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="App">
      <h3>Border Radius Previewer</h3>
      <div>
        <h4>Properties in px</h4>
        <form onSubmit={onSubmit}>
          <label>Top-Left: </label>
          <input type='text'name='topLeftValue' value={formData.topLeftValue} onChange={handleChange}/>

          <label>Top-Right: </label>
          <input type='text' name='topRightValue' value={formData.topRightValue} onChange={handleChange}/>

          <label>Bottom-Right: </label>
          <input type='text' name='bottomRightValue' value={formData.bottomRightValue} onChange={handleChange}/>

          <label>Bottom-Left: </label>
          <input type='text'name='bottomLeftValue' value={formData.bottomLeftValue} onChange={handleChange}/>

          <button style={{ marginLeft: "10px" }} type='submit'>Apply changes</button>
        </form>

        <div>
          <button style={{ width: "200px", height: "100px", marginTop: "40px", backgroundImage: "linear-gradient(to right, #ffb6c1, #e6e6fa)", border: "none", borderRadius: `${formData.topLeftValue || 0}px ${formData.topRightValue || 0}px ${formData.bottomRightValue || 0}px ${formData.bottomLeftValue || 0}px`}}>
          </button>
        </div>

        <div>
          <h4>Style</h4>
          <div>
            {updatedStyles}
          </div>

          <button onClick={handleCopy} style={{ width: "100px", height: "40px", cursor: "pointer", marginTop: "20px"}}>Copy</button>
        </div>
      </div>
    </div>
  );
}

export default App;
