"use client"; // Ensure the component is a Client Component

import { useState } from 'react';

export default function Page() {
  const [companyName, setCompanyName] = useState('');
  const [laborHours, setLaborHours] = useState('');
  const [hourlyWage, setHourlyWage] = useState('');
  const [solutionType, setSolutionType] = useState('1');
  const [laborCost, setLaborCost] = useState<number | null>(null);
  const [capitalExpenditure, setCapitalExpenditure] = useState<number | null>(null);
  const [paybackTime, setPaybackTime] = useState<number | null>(null);
  const [details, setDetails] = useState<string>('');

  const solutions = [
    { name: 'Small Pick Assist AMR', cost: 30000, maintenance: 6000, efficiency: 0.50 },
    { name: 'Large Pick Assist AMR', cost: 80000, maintenance: 7000, efficiency: 0.60 },
    { name: 'Bot on Top Cube ASRS', cost: 75000, maintenance: 17000, efficiency: 0.70 },
  ];

  const calculateInvestment = () => {
    const laborHoursNumber = parseFloat(laborHours);
    const hourlyWageNumber = parseFloat(hourlyWage);

    if (isNaN(laborHoursNumber) || isNaN(hourlyWageNumber)) {
      alert("Please enter valid numbers for labor hours and hourly wage.");
      return;
    }

    const selectedSolution = solutions[parseInt(solutionType) - 1];
    
    // Calculate labor hours saved based on the efficiency improvement of the selected solution
    const laborHoursSavedPerWeek = laborHoursNumber * selectedSolution.efficiency; 
    const annualLaborHoursSaved = laborHoursSavedPerWeek * 52;
    const annualLaborCostSavings = annualLaborHoursSaved * hourlyWageNumber;
    const capitalExpenditure = selectedSolution.cost + selectedSolution.maintenance;
    
    // Payback time calculation with correct formula
    const paybackTime = capitalExpenditure / (annualLaborCostSavings - selectedSolution.maintenance);

    setLaborCost(annualLaborCostSavings);
    setCapitalExpenditure(capitalExpenditure);
    setPaybackTime(paybackTime);

    setDetails(
      `Cost of labor: $${annualLaborCostSavings.toLocaleString()}\n` +
      `Capital Expenditure: $${capitalExpenditure.toLocaleString()}\n` +
      `Payback Time: ${paybackTime.toFixed(2)} years`
    );
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <form onSubmit={(e) => { e.preventDefault(); calculateInvestment(); }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="companyName">A. What is your company name?</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Start typing here…"
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="laborHours">B. What is your weekly labor hours?</label>
          <input
            type="number"
            id="laborHours"
            value={laborHours}
            onChange={(e) => setLaborHours(e.target.value)}
            placeholder="Enter a number here…"
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="hourlyWage">C. What is your hourly wage?</label>
          <input
            type="number"
            id="hourlyWage"
            value={hourlyWage}
            onChange={(e) => setHourlyWage(e.target.value)}
            placeholder="Enter a number here…"
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="solutionType">D. What type of solution are you looking for?</label>
          <select
            id="solutionType"
            value={solutionType}
            onChange={(e) => setSolutionType(e.target.value)}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          >
            {solutions.map((solution, index) => (
              <option key={index} value={index + 1}>{solution.name}</option>
            ))}
          </select>
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
          SUBMIT
        </button>
      </form>

      {laborCost !== null && capitalExpenditure !== null && paybackTime !== null && (
        <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#e5e5e5', borderRadius: '10px' }}>
          <p>Thank you {companyName}!</p>
          <p>Cost of labor: ${laborCost.toLocaleString()}</p>
          <p>Capital Expenditure: ${capitalExpenditure.toLocaleString()}</p>
          <p>Payback Time: {paybackTime.toFixed(2)} years</p>
          <details style={{ marginTop: '10px' }}>
            <summary>How did we calculate this?</summary>
            <p>{details}</p>
          </details>
        </div>
      )}
    </div>
  );
}
