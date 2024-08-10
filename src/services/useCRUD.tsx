import { useState, useEffect } from "react";
import axios from "axios";
import { CarsInfo } from "@/types";

type StateType = string | null;

const useCRUD = (baseURL: string, defaultHeaders = {}) => {
    const [data, setData] = useState<CarsInfo[] | null>(null);
    const [error, setError] = useState<StateType>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [token, setToken] = useState<StateType>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token"); // Load token on mount
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const sendRequest = async (
        method: string,
        url: string,
        payload: any = null
    ) => {
        setLoading(true);

        try {
            const headers = {
                ...defaultHeaders,
                Authorization: token ? `Bearer ${token}` : "",
            };

            const response = await axios({
                method: method,
                url: `${baseURL}${url}`,
                data: payload,
                headers,
            });

            setData(response.data);
        } catch (err) {
            setError(err.message || "An error occurred");
            setLoading(false);
        }
    };

    const login = async (credentials: any) => {
        try {
            const response = await sendRequest("POST", "/login", credentials);
            if (response.token) {
                setToken(response.token);
                localStorage.setItem("token", response.token); // Store for persistence
            }
        } catch (err) {
            setError(err.message || "Login failed");
        }
    };

    const signup = async (userData: any) => {
        try {
            await sendRequest("POST", "/signup", userData);
        } catch (err) {
            setError(err.message || "Signup failed");
        }
    };

    // CRUD methods (all use sendRequest for DRY code)
    const create = (payload: any) => sendRequest("POST", "", payload);
    const read = (url: string) => sendRequest("GET", url);
    const update = (id: number, payload: any) =>
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
