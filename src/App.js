import React, { useState } from 'react';
import DropdownForm from './components/DropdownForm';
import './App.css';

function App() {
  const [results, setResults] = useState(null);

  const handleCalculate = (data) => {
    const calculatedTax = (Math.random() * 100000).toFixed(2);
    setResults({ ...data, tax: calculatedTax });
  };

  const handleReset = () => setResults(null);

  return (
    <div className="App">
      <h1>Vehicle Import Tax Calculator</h1>
      {!results ? (
        <DropdownForm onCalculate={handleCalculate} />
      ) : (
        <div className="results-section">
          <h2>Results</h2>
          <pre>{JSON.stringify(results, null, 2)}</pre>
          <button className="reset-button" onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default App;