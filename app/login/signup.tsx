// 'use client';

// import { useState } from 'react';

// export default function SignupPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrorMessage('');

//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         alert('Signup successful');
//       } else {
//         const result = await response.json();
//         if (response.status === 409) {
//           setErrorMessage('User with this email already exists');
//         } else {
//           setErrorMessage(result.error || 'Signup failed. Please try again.');
//         }
//       }
//     } catch (error) {
//       console.error('Error in signup request:', error);
//       setErrorMessage('Signup failed. Please try again.');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
//       <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//         <div>
//           <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
//           />
//         </div>
//         <div>
//           <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
//           />
//         </div>
//         <div>
//           <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px' }}>Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//             style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
//           />
//         </div>
//         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//         <button type="submit" style={{ padding: '10px', backgroundColor: '#1abc9c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// }
