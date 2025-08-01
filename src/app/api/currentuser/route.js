import { cookies } from 'next/headers';

export async function GET() {
  
  // const cookieStore = cookies(); // ✅ await required
  // const cookieHeader = cookieStore.toString();
  // const cookieHeader = cookies().toString();
   const cookieHeader = request.headers.get('cookie')
   console.log('cookieHeader:', cookieHeader); // ✅ Debug this
   
    if (!cookieHeader) {
      return new Response(JSON.stringify({ user: null, 'data': 'no data' }), { status: 401 });
    }
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/currentuser`, {
    method: 'GET',
    headers: {
      Cookie: cookieHeader,
    },
    cache: 'no-store',
  });

  const text = await res.text(); // Get raw response for debugging
  console.log('Laravel response:', res.status, text);

  if (!res.ok) {
    return new Response(JSON.stringify({ user: null }), { status: 401 });
  }

  const data = await res.json();
  console.log('data', data);
  return new Response(JSON.stringify({ user: data.CurrentUserData }), { status: 200 });
}