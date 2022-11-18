import axios from "axios";

export const accessUrl = "http://localhost:3002/api";

const instance = axios.create({
    baseURL: accessUrl,
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem("token");
    return config;
});

export default instance;
