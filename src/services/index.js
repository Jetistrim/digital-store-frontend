import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const API = axios.create({
    baseURL: "https://digital-store-backend-c4an.onrender.com"
})

export const queryClient = new QueryClient();