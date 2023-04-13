import api from "./api";

export async function postLearningSession(data, token) {
    const response = await api.post("/userCards", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    return response.data;
}