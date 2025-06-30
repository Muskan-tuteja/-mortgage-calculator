// src/components/ResultsDisplay.js
import React from "react";

const ResultsDisplay = ({ results }) => {
  return (
    <div className="results-section">
      <h2>Results</h2>
      <p><strong>EMI:</strong> ₹{results.emi}</p>
      <p><strong>Total Interest:</strong> ₹{results.totalInterest}</p>
      <p><strong>Total Payment:</strong> ₹{results.totalPayment}</p>
    </div>
  );
};

export default ResultsDisplay;
