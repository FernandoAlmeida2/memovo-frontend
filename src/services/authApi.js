import api from "./api";

export async function signIn(data) {
    const response = await api.post("/auth", data, {});
    return response.data;
}