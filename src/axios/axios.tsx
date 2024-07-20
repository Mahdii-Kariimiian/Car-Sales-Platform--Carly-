import axios from "axios";

export const fetchCars = axios.create({
    baseURL: "https://carly-2024-default-rtdb.firebaseio.com/",
});
