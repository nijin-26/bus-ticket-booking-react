import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'api-url-here',
    timeout: 8000,
});

export default apiClient;
