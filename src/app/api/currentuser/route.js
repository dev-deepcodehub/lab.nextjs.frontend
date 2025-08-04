import axios from 'axios';

export async function GET(request) {
  try {
    const cookie = request.headers.get('cookie') || '';
    // console.log('cookies being sent:', cookie);

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/currentuser`, {
      headers: {
        Cookie: cookie, // 👈 Send user's session cookie
      },
      withCredentials: true, // Optional, but generally needed when using sessions
    });


    // console.log('response after api call', response);
    // axios response already has parsed data
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.log('errorrrrrr', error);

    return new Response(
      JSON.stringify({ error: 'Failed to get user data', details: error?.response?.data }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
