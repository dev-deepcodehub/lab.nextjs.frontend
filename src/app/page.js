'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';  
import RouterLink from 'next/link';
import Link from '@mui/material/Link';
import { paths } from '@/paths';
import { useAuth } from '@/context/user-context'
import { logOut } from '@/lib/authapi/api';

export default function Page() {
    const { user, loading } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
      try {
        await logOut();
        router.push('/login');
      } catch (error) {
        console.log('Logout failed:', error);
      }
    };

    useEffect(() => {
      console.log('userdata', user);
    }, [loading, user]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
      { user ? `Welcome, ${user.first_name}` : 'You are not logged in' }
      <h1 className="text-4xl font-bold mb-4">Welcome to SpeedyNinja</h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-xl">
        Build fast. Deliver faster. Empower your brand with our modern tech solutions.
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          <Link component={RouterLink} href={paths.dashboard.overview}>Get Started</Link>
        </button>
        <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition">
          <Link component={RouterLink} href={paths.auth.signIn}>Login Now</Link>
        </button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </main>
  );
}
