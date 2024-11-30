import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const App = () => {
  const [inputs, setInputs] = useState({
    currentAge: "",
    retirementAge: "",
    wishToLiveTill: "",
    inflation: 6,
    capitalGainTax: 20,
    incomeTax: 30,
  });
  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/calculator/calculate", inputs);
      setResults(response.data);
    } catch (error) {
      console.error("Error calculating:", error);
    }
  };

  return (
    <div className="container">
      <h1>Retirement Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Current Age:</label>
          <input type="number" name="currentAge" value={inputs.currentAge} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Retirement Age:</label>
          <input type="number" name="retirementAge" value={inputs.retirementAge} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Wish to Live Till:</label>
          <input type="number" name="wishToLiveTill" value={inputs.wishToLiveTill} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Inflation (%):</label>
          <input type="number" name="inflation" value={inputs.inflation} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Capital Gain Tax (%):</label>
          <input type="number" name="capitalGainTax" value={inputs.capitalGainTax} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Income Tax (%):</label>
          <input type="number" name="incomeTax" value={inputs.incomeTax} onChange={handleChange} />
        </div>
        <button type="submit">Calculate</button>
      </form>

      {results && (
        <div className="results">
          <h2>Results:</h2>
          <p>Years to Retirement: {results.yearsToRetirement}</p>
          <p>Years After Retirement: {results.yearsAfterRetirement}</p>
          <p>Total Years: {results.totalYears}</p>
        </div>
      )}
    </div>
  );
};

export default App;
