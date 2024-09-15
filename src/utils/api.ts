import axios from 'axios';

const api = axios.create({
    baseURL: 'https://prueba-tasky-backend-production.up.railway.app'
});

export default api;