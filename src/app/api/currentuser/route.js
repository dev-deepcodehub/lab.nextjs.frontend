import { cookies } from 'next/headers';

export async function GET() {
  
  const cookieStore = cookies(); // await required
  const cookieHeader = cookieStore.toString();
  // const cookieHeader = cookies().toString();
   console.log('cookieHeader:', cookieHeader); // Debug this
   
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/currentuser`, {
    method: 'GET',
    headers: {
      Cookie: cookieHeader,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ user: null }), { status: 401 });
  }

  const data = await res.json();
  console.log('data', data);
  return new Response(JSON.stringify({ user: data.CurrentUserData }), { status: 200 });
}