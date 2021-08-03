import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5' 
    //'https://api.openweathermap.org/data/2.5/forecast/daily?' 
});

export default api;
