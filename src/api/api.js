import axios from "axios";

let headers = {};

if (localStorage.token) {
    headers.Authorization = `Bearer ${localStorage.token}`;
}

const api = axios.create({
    baseURL: 'http://10.58.72.97:3333',
    headers,
});

export default api;