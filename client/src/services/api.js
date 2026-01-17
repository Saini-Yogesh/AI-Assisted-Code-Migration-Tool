import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL + "/api",
});

export const migrateCode = (code, target) =>
    api.post("/migrate", { code, target });

export const getSessions = () =>
    api.get("/migrate/sessions");

export const deleteSession = (id) =>
    api.delete(`/migrate/sessions/${id}`);
