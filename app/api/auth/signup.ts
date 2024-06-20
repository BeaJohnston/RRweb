// /app/api/auth/signup.ts

import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await sql`SELECT * FROM users WHERE email=${email}`;
    if (existingUser.rows.length > 0) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    await sql`
      INSERT INTO users (email, password) 
      VALUES (${email}, ${hashedPassword})
    `;

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}