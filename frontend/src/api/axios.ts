import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // your NestJS API
  withCredentials: true, // needed if you're using cookies
});

export default instance;
