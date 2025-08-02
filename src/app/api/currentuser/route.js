  import { cookies } from 'next/headers';
  console.log('api called');
  export async function GET() {

    const cookieStore = await cookies(); // await required

    // const cookieHeader = cookieStore.getAll()
    //   .map(c => `${c.name}=${c.value}`)
    //   .join('; ');

    const cookieHeader = cookieStore.getAll()
    .map(c => `${c.name}=${c.value}`)
    .join('; ');
    // const cookieHeader = cookies().toString();
    console.log('cookieHeader:', cookieHeader); // Debug
    
    const res = await fetch('https://dev.digilabpro.com/currentuser', {
      method: 'GET',
      headers: {
        Cookie: cookieHeader,
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ user: null }));
    }

    const data = await res.json();
    console.log('data', data);
    return new Response(JSON.stringify({ user: data.CurrentUserData }));
  }