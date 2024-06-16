import axios from "axios";

export const client = axios.create({
    // baseURL: 'http://localhost:3000/',
    baseURL: 'https://desafio-mycareforce.onrender.com/',
});