// // /app/dashboard/profile/page.tsx
// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { getSession } from 'next-auth/react';
// import { User } from '@/app/types';

// export default function ProfilePage() {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const session = await getSession();
//         if (!session) {
//           router.push('/login');
//           return;
//         }

//         const response = await fetch('/api/auth/profile');
//         if (!response.ok) {
//           throw new Error('Failed to fetch user data');
//         }

//         const data: User = await response.json();
//         setUser(data);
//       } catch (error: any) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [router]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   const handleUpdateProfile = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/auth/update-profile', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name: user?.name }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update profile');
//       }

//       alert('Profile updated successfully');
//     } catch (error: any) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
//       <h1>Profile</h1>
//       <form onSubmit={handleUpdateProfile}>
//         <div style={{ marginBottom: '20px' }}>
//           <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
//           <input
//             type="email"
//             value={user?.email ?? ''}
//             readOnly
//             style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
//           />
//         </div>
//         <div style={{ marginBottom: '20px' }}>
//           <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
//           <input
//             type="text"
//             value={user?.name ?? ''}
//             onChange={(e) => setUser(user ? { ...user, name: e.target.value } : null)}
//             style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
//           />
//         </div>
//         <button
//           type="submit"
//           style={{
//             padding: '10px',
//             backgroundColor: '#1abc9c',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer',
//           }}
//         >
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// }
