// import { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';
// import bcrypt from 'bcrypt';
// import { sql } from '@vercel/postgres';
// import crypto from 'crypto';

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const { email } = req.body;

//   try {
//     const user = await sql`SELECT * FROM users WHERE email=${email}`;
//     if (user.rows.length === 0) {
//       return res.status(404).json({ error: 'No user found with this email address' });
//     }

//     const token = crypto.randomBytes(32).toString('hex');
//     const hashedToken = await bcrypt.hash(token, 10);
//     const tokenExpiry = new Date(Date.now() + 3600000); // 1 hour expiry

//     // Convert the date to ISO string for SQL
//     const formattedTokenExpiry = tokenExpiry.toISOString();

//     await sql`
//       INSERT INTO password_reset_tokens (user_id, token, expires_at)
//       VALUES (${user.rows[0].id}, ${hashedToken}, ${formattedTokenExpiry})
//     `;

//     const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}&email=${email}`;
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Password Reset',
//       html: `<p>Please reset your password by clicking the following link: <a href="${resetLink}">${resetLink}</a></p>`,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ message: 'Password reset email sent' });
//   } catch (error) {
//     console.error('Error in forgot password handler:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }
