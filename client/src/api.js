import axios from 'axios';
const API = axios.create({ baseURL: process.env.REACT_APP_API_URL || '' }); // use proxy or set REACT_APP_API_URL=http://localhost:5000
export default API;
