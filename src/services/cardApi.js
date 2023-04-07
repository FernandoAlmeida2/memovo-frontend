import api from "./api";

export async function getLearningCards(token, numCards) {
    const response = await api.get(`/cards/${numCards}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data;
  };