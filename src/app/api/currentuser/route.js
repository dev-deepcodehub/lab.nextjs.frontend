// import axios from 'axios';

// export async function GET(request) {
//   try {
//     // Forward cookies from client request to backend for session auth
//     const cookie = request.headers.get('cookie') || '';

//     const response = await axios.get('https://dev.digilabpro.com/currentuser', {
//       headers: { cookie },
//       // headers: {
//       //   Cookie: cookie,
//       // },
//       withCredentials: true,
//     });

//     console.log('respone after api call', response);

//     const user = await response.json();
//     console.log('respone user data', user);

//     } catch (error) {
//       console.error('Error fetching current user data:', error);
//     }

// }

import axios from 'axios';

export async function GET(request) {
  try {
    const cookie = request.headers.get('cookie') || '';

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/currentuser`, {
      headers: { cookie },
      withCredentials: true,
    });

    console.log('response after api call', response);
    // axios response already has parsed data
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('API /api/currentuser error:', error?.message, error?.response?.data);

    return new Response(
      JSON.stringify({ error: 'Failed to get user data', details: error?.response?.data }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
