import { API } from '../constants';

export const deleteQuizById = async (id) => {
  try {
    const url = `${API}/api/quizzes/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await response.json();
    return { ...data, statusCode: response.status };
  } catch (error) {
    console.error(error);
  }

}
