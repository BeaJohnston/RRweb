"use client";

import { useState } from 'react';
import styles from './styles.module.css';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      alert('Password reset link sent to your email');
    } else {
      alert('Failed to send reset link');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleForgotPassword}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.inputField}
          />
        </div>
        <button type="submit" className={styles.submitButton}>Reset Password</button>
      </form>
    </div>
  );
}
