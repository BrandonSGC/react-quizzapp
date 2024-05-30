import { API } from '../constants';

export const createQuiz = async (quiz) => {
  try {
    const url = `${API}/api/quizzes/create`;
    const formData = new FormData();
    
    formData.append("name", quiz.name);
    formData.append("user_id", quiz.user_id);
    formData.append("image", quiz.image);
    formData.append("questions", JSON.stringify(quiz.questions));

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return { ...data, statusCode: response.status };
  } catch (error) {
    console.error(error);
  }
};