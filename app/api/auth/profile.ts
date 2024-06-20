// // /app/api/auth/update-profile.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from './[...nextauth]';
// import { sql } from '@vercel/postgres';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const session = await getServerSession(req, res, authOptions);

//   if (!session || !session.user?.email) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const { name } = req.body;

//   try {
//     await sql`
//       UPDATE users
//       SET name = ${name}
//       WHERE email = ${session.user.email}
//     `;
//     res.status(200).json({ message: 'Profile updated successfully' });
//   } catch (error) {
//     console.error('Error updating profile:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }
