import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});

api.interceptors.request.use(async (config) => {
    if (['post', 'put', 'patch', 'delete'].includes(config.method?.toLowerCase() || '')) {
        if (!document.cookie.includes('csrftoken')) {
            try {
                await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/csrf/`, { withCredentials: true });
            } catch (e) {
                console.error("Failed to fetch CSRF token", e);
            }
        }

        const csrfToken = document.cookie.split('; ').find(row => row.startsWith('csrftoken='))?.split('=')[1];
        if (csrfToken) {
            config.headers['X-CSRFToken'] = csrfToken;
        }
    }
    return config;
});

export default api;
