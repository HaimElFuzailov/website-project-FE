import axios from 'axios';

let url = 'http://localhost:8090';

export const axiosConfig = {
    baseURL: url
};
axios.defaults.withCredentials = false;

export const axiosInstance = axios.create(axiosConfig);
