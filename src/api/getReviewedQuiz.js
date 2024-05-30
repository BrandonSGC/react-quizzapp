import { API } from '../constants';

export const getReviewedQuiz = async (quizId, answers) => {
  try {
    const url = `${API}/api/quizzes/${quizId}/answers`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answers),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};