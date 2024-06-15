"use client";

import { useState } from 'react';
import styles from './styles.module.css'; // Ensure the path matches where your CSS file is

export default function ShiftsPage() {
  const [peakSeason, setPeakSeason] = useState(false);
  const [nonPeakHoursPerWeek, setNonPeakHoursPerWeek] = useState('');
  const [peakHoursPerWeek, setPeakHoursPerWeek] = useState('');
  const [peakWeeksPerYear, setPeakWeeksPerYear] = useState('');
  const [nonPeakWeeksPerYear, setNonPeakWeeksPerYear] = useState('');
  const [hourlyWage, setHourlyWage] = useState('');
  const [benefitsPercentage, setBenefitsPercentage] = useState('');
  const [annualLaborCost, setAnnualLaborCost] = useState<number | null>(null);

  const calculateAnnualLaborCost = () => {
    const nonPeakHours = parseFloat(nonPeakHoursPerWeek);
    const peakHours = parseFloat(peakHoursPerWeek);
    const peakWeeks = parseFloat(peakWeeksPerYear);
    const nonPeakWeeks = parseFloat(nonPeakWeeksPerYear);
    const wage = parseFloat(hourlyWage);
    const benefits = parseFloat(benefitsPercentage) / 100;

    if (isNaN(nonPeakHours) || isNaN(peakHours) || isNaN(peakWeeks) || isNaN(nonPeakWeeks) || isNaN(wage) || isNaN(benefits)) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    const annualLaborHours = (peakWeeks * peakHours) + (nonPeakWeeks * nonPeakHours);
    const burdenedWageCost = wage * (1 + benefits);
    const totalAnnualLaborCost = annualLaborHours * burdenedWageCost;

    setAnnualLaborCost(totalAnnualLaborCost);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Shifts</h1>
      <form onSubmit={(e) => { e.preventDefault(); calculateAnnualLaborCost(); }}>
        <div className={styles.formGroup}>
          <label htmlFor="peakSeason">Do you have a peak season?</label>
          <select
            id="peakSeason"
            value={peakSeason ? 'yes' : 'no'}
            onChange={(e) => setPeakSeason(e.target.value === 'yes')}
            className={styles.selectField}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="nonPeakHours">How many hours per week will the system operate non-peak?</label>
          <input
            type="number"
            id="nonPeakHours"
            value={nonPeakHoursPerWeek}
            onChange={(e) => setNonPeakHoursPerWeek(e.target.value)}
            placeholder="Enter non-peak hours per week…"
            required
            className={styles.inputField}
          />
        </div>

        {peakSeason && (
          <>
            <div className={styles.formGroup}>
              <label htmlFor="peakHours">How many hours per week will the system operate peak?</label>
              <input
                type="number"
                id="peakHours"
                value={peakHoursPerWeek}
                onChange={(e) => setPeakHoursPerWeek(e.target.value)}
                placeholder="Enter peak hours per week…"
                required
                className={styles.inputField}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="peakWeeks">How many weeks per year are peak?</label>
              <input
                type="number"
                id="peakWeeks"
                value={peakWeeksPerYear}
                onChange={(e) => setPeakWeeksPerYear(e.target.value)}
                placeholder="Enter peak weeks per year…"
                required
                className={styles.inputField}
              />
            </div>
          </>
        )}

        <div className={styles.formGroup}>
          <label htmlFor="nonPeakWeeks">How many weeks per year are non-peak?</label>
          <input
            type="number"
            id="nonPeakWeeks"
            value={nonPeakWeeksPerYear}
            onChange={(e) => setNonPeakWeeksPerYear(e.target.value)}
            placeholder="Enter non-peak weeks per year…"
            required
            className={styles.inputField}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="hourlyWage">What is your hourly wage?</label>
          <input
            type="number"
            id="hourlyWage"
            value={hourlyWage}
            onChange={(e) => setHourlyWage(e.target.value)}
            placeholder="Enter hourly wage…"
            required
            className={styles.inputField}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="benefitsPercentage">Benefits (% of wage per hour)</label>
          <input
            type="number"
            id="benefitsPercentage"
            value={benefitsPercentage}
            onChange={(e) => setBenefitsPercentage(e.target.value)}
            placeholder="Enter benefits percentage…"
            required
            className={styles.inputField}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          SUBMIT
        </button>
      </form>

      {annualLaborCost !== null && (
        <div className={styles.results}>
          <h2>Annual Labor Cost Calculation</h2>
          <p>Annual Labor Cost: ${annualLaborCost.toLocaleString()}</p>
          <details className={styles.details}>
            <summary>How did we calculate this?</summary>
            <p>
              Annual Labor Hours = (Peak Weeks * Peak Hours per Week) + (Non-Peak Weeks * Non-Peak Hours per Week)
              <br />
              Burdened Wage Cost = Hourly Wage + Benefits (as a percentage of wage)
              <br />
              Annual Labor Cost = Annual Labor Hours * Burdened Wage Cost
            </p>
          </details>
        </div>
      )}
    </div>
  );
}
