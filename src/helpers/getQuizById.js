export const getQuizById = async (id) => {
  try {
    const url = `http://localhost:3000/api/quizzes/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
