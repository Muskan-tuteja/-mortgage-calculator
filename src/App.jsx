// src/App.js
import React, { useState } from "react";
import "./App.css";
import CalculatorForm from "./Components/CalculatorForm";
import ResultsDisplay from "./Components/ResultsDisplay";

function App() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [results, setResults] = useState(null);

  const calculateEMI = (e) => {
    e.preventDefault();
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(loanTerm) * 12;

    if (!P || !r || !n) return;

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    setResults({
      emi: emi.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
    });
  };

  return (
    <div className="calculator-container">
      <h1>Mortgage Calculator</h1>
      <CalculatorForm
        loanAmount={loanAmount}
        setLoanAmount={setLoanAmount}
        interestRate={interestRate}
        setInterestRate={setInterestRate}
        loanTerm={loanTerm}
        setLoanTerm={setLoanTerm}
        calculateEMI={calculateEMI}
      />
      {results && <ResultsDisplay results={results} />}
    </div>
  );
}

export default App;


