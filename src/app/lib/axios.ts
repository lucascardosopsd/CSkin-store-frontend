"use server";

import axios from "axios";

const api = axios;

api.defaults.baseURL = process.env.API_URL || "http://localhost:3333";

export default api;
