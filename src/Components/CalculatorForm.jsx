// src/components/CalculatorForm.js
import React from "react";

const CalculatorForm = ({ loanAmount, setLoanAmount, interestRate, setInterestRate, loanTerm, setLoanTerm, calculateEMI }) => {
  return (
    <form onSubmit={calculateEMI} className="form-section">
      <label>Loan Amount:</label>
      <input
        type="number"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
        required
      />

      <label>Interest Rate (%):</label>
      <input
        type="number"
        step="0.01"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
        required
      />

      <label>Loan Term (Years):</label>
      <input
        type="number"
        value={loanTerm}
        onChange={(e) => setLoanTerm(e.target.value)}
        required
      />

      <button type="submit">Calculate</button>
    </form>
  );
};

export default CalculatorForm;
