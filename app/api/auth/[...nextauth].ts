// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { sql } from '@vercel/postgres';
// import bcrypt from 'bcrypt';

// // Define a type for the user
// type User = {
//   id: string;
//   name: string;
//   email: string;
//   password: string;
// };

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       // Define the credentials fields
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials) {
//         if (!credentials) {
//           throw new Error('Credentials are missing');
//         }

//         const email = credentials.email as string;
//         const password = credentials.password as string;

//         if (!email || !password) {
//           throw new Error('Email and password are required');
//         }

//         // Query the database to get the user
//         const result = await sql`SELECT * FROM users WHERE email=${email}`;

//         // Check if user exists
//         if (result.rows.length === 0) {
//           throw new Error('No user found with this email');
//         }

//         const user: User = result.rows[0] as User;

//         // Verify the password
//         const isValidPassword = await bcrypt.compare(password, user.password);
//         if (!isValidPassword) {
//           throw new Error('Invalid email or password');
//         }

//         // Return the user object
//         return { id: user.id, name: user.name, email: user.email };
//       }
//     })
//   ],
//   pages: {
//     signIn: '/login',
//     signOut: '/logout',
//     error: '/login', // Error code passed in query string as ?error=
//     verifyRequest: '/login', // (used for check email message)
//     newUser: '/signup' // New users will be directed here on first sign in (leave null to disable)
//   }
// };

// export default NextAuth(authOptions);
