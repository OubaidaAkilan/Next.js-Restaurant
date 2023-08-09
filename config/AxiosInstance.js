import axios from 'axios';

/* Using the NODE_ENV environment variable in Next.js is a common and useful practice for configuring 
your application's behavior based on the current environment (development, production, etc.). 
The NODE_ENV variable is a standard environment variable in Node.js that can be 
used to differentiate between development and production environments. */

let BASE_URL = '';

if (process.env.NODE_ENV === 'development') {
  // Code for development environment
  BASE_URL = process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_BASE_URL;
} else {
  // Code for production environment
  BASE_URL = process.env.NEXT_PUBLIC_PRODUCTION_ENV_BASE_URL;
}

// Create a new axios instance
const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
  withCredentials: true,
});

// Axios Interceptors => https://axios-http.com/docs/interceptors
AxiosInstance.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    return Promise.reject(error);
  }
);

export default AxiosInstance;
