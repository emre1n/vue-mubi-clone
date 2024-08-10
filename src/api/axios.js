import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.mubi.com/v3',
  timeout: 10000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Accept-Language': 'en',
    CLIENT: 'web',
    'X-Forwarded-Proto': 'https',
    ANONYMOUS_USER_ID: 'b798c95d-fe74-4c2b-a1dd-7e54dee28fd1',
    'Client-Country': 'TR',
    Pragma: 'no-cache',
    'Cache-Control': 'no-cache',
  },
});

export default axiosInstance;
