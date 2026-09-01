import './App.css';
import { useState } from 'react';

function App() {
  const [binary, setBinary] = useState("")
  const [result, setResult] = useState(null)

  const handleBinaryConversion = () => {
    
    let decimal = 0;
    let power = 0;

   for (let x = binary.length - 1; x>=0; x--) {
    decimal = decimal + (Number(binary[x]) * 2 ** power)
    power++
   }

   setResult(decimal)

  }

  const handleChange = (e) => {
    const value = e.target.value;

    for (let x = 0; x < value.length; x++) {
      if (value[x] !== "0" && value[x] !== "1") {
        alert("Only 0's and 1's allowed")
        return
      }
    }

    if (value.length > 8){
      alert("Only 8 digits or less are allowed")
      return;
    } else {
      setBinary(value)
    }

  }


  return (
    <div className="App">
      <h1>Binary to Decimal Conversion</h1>
      <div>
        <label>Binary </label>
        <input type='number' value={binary} onChange={handleChange}/>
      </div>
      <button onClick={handleBinaryConversion}  style={{ marginTop: "20px", cursor: "pointer"}}>Convert</button>

     <h3>
      Decimal: {result}
     </h3>
    </div>
  );
}

export default App;
