import { API } from '../constants';

export const getQuizById = async (id) => {
  try {
    const url = `${API}/api/quizzes/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
