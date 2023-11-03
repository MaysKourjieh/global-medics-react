import axios from "axios";
import { BASE_URL } from "./config";

const axiosClient = axios.create({
    baseURL: `${BASE_URL}/api`,
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        throw error;
    }
);

export default axiosClient;
