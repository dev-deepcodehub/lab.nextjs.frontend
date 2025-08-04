import axios from 'axios';

export async function GET(request) {
    // Forward cookies from client request to backend for session auth
    const cookie = request.headers.get('cookie') || '';

    const response = await axios.get('https://dev.digilabpro.com/currentuser', {
      headers: { cookie },
      // headers: {
      //   Cookie: cookie,
      // },
      withCredentials: true,
    });

    if (!response.ok) return res.status(401).json();

    const user = await response.json();
    return res.status(200).json(user);

}
