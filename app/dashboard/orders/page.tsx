// Add the "use client" directive to indicate this is a Client Component
"use client";

import { useState } from 'react';
import styles from './styles.module.css'; // Ensure the path matches where your CSS file is
import React from 'react';

export default function OrdersPage() {
  const [linesPerOrder, setLinesPerOrder] = useState('');
  const [eachesPerLine, setEachesPerLine] = useState('');
  const [ordersPerDay, setOrdersPerDay] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process the form data as required
    console.log({
      linesPerOrder,
      eachesPerLine,
      ordersPerDay,
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="linesPerOrder">How many Lines per order</label>
          <input
            type="number"
            id="linesPerOrder"
            value={linesPerOrder}
            onChange={(e) => setLinesPerOrder(e.target.value)}
            placeholder="Enter number of lines per order…"
            className={styles.inputField}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="eachesPerLine">How Many Eaches per Line?</label>
          <input
            type="number"
            id="eachesPerLine"
            value={eachesPerLine}
            onChange={(e) => setEachesPerLine(e.target.value)}
            placeholder="Enter eaches per line…"
            className={styles.inputField}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="ordersPerDay">How Many Orders per Day do you want to design for?</label>
          <input
            type="number"
            id="ordersPerDay"
            value={ordersPerDay}
            onChange={(e) => setOrdersPerDay(e.target.value)}
            placeholder="Enter orders per day…"
            className={styles.inputField}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}
