import { API } from '../constants';

export const getDefaultQuizzes = async ( userId = null ) => {
  try {
    const url = `${API}/api/quizzes/?id=${userId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}