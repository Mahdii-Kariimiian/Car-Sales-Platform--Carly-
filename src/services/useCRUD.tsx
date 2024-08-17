import { useState, useEffect } from "react";
import axios from "./axiosConfig";
import { CarsInfo } from "../types";

const useCRUD = (baseURL: string, defaultHeaders = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken: string | null = localStorage.getItem("token"); // Load token on mount
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const sendRequest = async (method: string, url: string, payload: object | null = null) => {
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
    const create = (payload:CarsInfo) => sendRequest("POST", "", payload);
    const read = () => sendRequest("GET", "");
    const update = (id: number, payload:CarsInfo) =>
        sendRequest("PUT", `/${id}`, payload);
    const remove = (id: number) => sendRequest("DELETE", `/${id}`);

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
