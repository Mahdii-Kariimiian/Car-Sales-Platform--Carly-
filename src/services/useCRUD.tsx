import { useState, useEffect } from "react";
import axios from "axios";

const useCRUD = (baseURL, defaultHeaders = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token"); // Load token on mount
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const sendRequest = async (method, url, payload = null) => {
        setLoading(true);

        try {
            const headers = {
                ...defaultHeaders,
                Authorization: token ? `Bearer ${token}` : "",
            };

            const response = await axios({
                method,
                url: `${baseURL}${url}`,
                data: payload,
                headers,
            });

            setData(response.data);
        } catch (err) {
            setError(err);
            // Consider more sophisticated error handling (status codes, specific messages)
        } finally {
            setLoading(false);
        }
    };

    const login = async (credentials) => {
        try {
            const response = await sendRequest("POST", "/login", credentials);
            if (response.token) {
                setToken(response.token);
                localStorage.setItem("token", response.token); // Store for persistence
            }
        } catch (err) {
            // Handle login errors
        }
    };

    const signup = async (userData) => {
        try {
            await sendRequest("POST", "/signup", userData);
        } catch (err) {
            // Handle signup errors
        }
    };

    // CRUD methods (all use sendRequest for DRY code)
    const create = (payload) => sendRequest("POST", "", payload);
    const read = () => sendRequest("GET", "");
    const update = (id, payload) => sendRequest("PUT", `/${id}`, payload);
    const remove = (id) => sendRequest("DELETE", `/${id}`);

    return {
        data,
        error,
        loading,
        create,
        read,
        update,
        remove,
        login,
        signup,
    };
};

export default useCRUD;
