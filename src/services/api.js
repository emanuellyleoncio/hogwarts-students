
import axios from 'axios';

export default axios.create({
    baseURL: ' https://hp-api.onrender.com',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});