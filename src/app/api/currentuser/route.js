import { cookies } from 'next/headers';

export async function GET() {
  
  const cookieStore = await cookies(); // ✅ await required
  const cookieHeader = cookieStore.toString();
  // const cookieHeader = cookies().toString();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/currentuser`, {
    method: 'POST',
    headers: {
      Cookie: cookieHeader,
    },
    credentials: 'include',
    cache: 'no-store',
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ user: null }), { status: 401 });
  }

  const data = await res.json();
  return new Response(JSON.stringify({ user: data.CurrentUserData }), { status: 200 });
}