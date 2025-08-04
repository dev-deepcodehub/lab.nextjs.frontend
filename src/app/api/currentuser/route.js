import axios from 'axios';

export async function GET(request) {
  try {
    // Forward cookies from client request to backend for session auth
    const cookie = request.headers.get('cookie') || '';

    const response = await axios.get('https://dev.digilabpro.com/currentuser', {
      headers: { cookie },
      // headers: {
      //   Cookie: cookie,
      // },
      withCredentials: true,
    });

    console.log('respone after api call', response);

    const user = await response.json();
    console.log('respone user data', user);

    } catch (error) {
      console.error('Error fetching current user data:', error);
    }

}