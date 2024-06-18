"use client"; // Ensure the component is a Client Component

import { useState, FormEvent } from 'react';
import styles from './styles.module.css'; // Ensure the path matches where your CSS file is

// Define the type for the solutions array elements
type Solution = {
  name: string;
  cost: number;
  maintenance: number;
  efficiency: number;
};

export default function Page() {
  // UseState with proper TypeScript types
  const [companyName, setCompanyName] = useState<string>('');
  const [laborHours, setLaborHours] = useState<string>('');
  const [hourlyWage, setHourlyWage] = useState<string>('');
  const [solutionType, setSolutionType] = useState<string>('1');
  const [laborCost, setLaborCost] = useState<number | null>(null);
  const [capitalExpenditure, setCapitalExpenditure] = useState<number | null>(null);
  const [paybackTime, setPaybackTime] = useState<number | null>(null);
  const [details, setDetails] = useState<string>('');

  // Solutions array typed with Solution type
  const solutions: Solution[] = [
    { name: 'Small Pick Assist AMR', cost: 30000, maintenance: 6000, efficiency: 0.50 },
    { name: 'Large Pick Assist AMR', cost: 80000, maintenance: 7000, efficiency: 0.60 },
    { name: 'Bot on Top Cube ASRS', cost: 75000, maintenance: 17000, efficiency: 0.70 },
  ];

  // Calculation function
  const calculateInvestment = () => {
    const laborHoursNumber = parseFloat(laborHours);
    const hourlyWageNumber = parseFloat(hourlyWage);

    if (isNaN(laborHoursNumber) || isNaN(hourlyWageNumber)) {
      alert("Please enter valid numbers for labor hours and hourly wage.");
      return;
    }

    const selectedSolution = solutions[parseInt(solutionType) - 1];
    const laborHoursSavedPerWeek = laborHoursNumber * selectedSolution.efficiency;
    const annualLaborHoursSaved = laborHoursSavedPerWeek * 52;
    const annualLaborCostSavings = annualLaborHoursSaved * hourlyWageNumber;
    const capitalExpenditure = selectedSolution.cost + selectedSolution.maintenance;
    const paybackTime = capitalExpenditure / (annualLaborCostSavings - selectedSolution.maintenance);

    setLaborCost(annualLaborCostSavings);
    setCapitalExpenditure(capitalExpenditure);
    setPaybackTime(paybackTime);

    setDetails(
      `Cost of labor: $${annualLaborCostSavings.toLocaleString()}\n\n` +
      `Capital Expenditure: $${capitalExpenditure.toLocaleString()}\n\n` +
      `Payback Time: ${paybackTime.toFixed(2)} years\n\n` +
      `Labor Hours Saved Per Week: ${laborHoursSavedPerWeek.toFixed(2)} hours\n\n` +
      `Annual Labor Hours Saved: ${annualLaborHoursSaved.toLocaleString()} hours\n\n` +
      `Annual Labor Cost Savings: $${annualLaborCostSavings.toLocaleString()}`
    );
  };

  // Handle form submit with proper typing
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    calculateInvestment();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="companyName">A. What is your company name?</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Start typing here…"
            required
            className={styles.inputField}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="laborHours">B. What is your weekly labor hours?</label>
          <input
            type="number"
            id="laborHours"
            value={laborHours}
            onChange={(e) => setLaborHours(e.target.value)}
            placeholder="Enter a number here…"
            required
            className={styles.inputField}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="hourlyWage">C. What is your hourly wage?</label>
          <input
            type="number"
            id="hourlyWage"
            value={hourlyWage}
            onChange={(e) => setHourlyWage(e.target.value)}
            placeholder="Enter a number here…"
            required
            className={styles.inputField}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="solutionType">D. What type of solution are you looking for?</label>
          <select
            id="solutionType"
            value={solutionType}
            onChange={(e) => setSolutionType(e.target.value)}
            className={styles.selectField}
          >
            {solutions.map((solution, index) => (
              <option key={index} value={(index + 1).toString()}>{solution.name}</option>
            ))}
          </select>
        </div>

        <button type="submit" className={styles.submitButton}>
          SUBMIT
        </button>
      </form>

      {laborCost !== null && capitalExpenditure !== null && paybackTime !== null && (
        <div className={styles.results}>
          <p>Thank you, {companyName}!</p>
          <p>Cost of labor: ${laborCost.toLocaleString()}</p>
          <p>Capital Expenditure: ${capitalExpenditure.toLocaleString()}</p>
          <p>Payback Time: {paybackTime.toFixed(2)} years</p>
          <details className={styles.details}>
            <summary>How did we calculate this?</summary>
            <p>{details.split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}</p>
          </details>
        </div>
      )}
    </div>
  );
}
