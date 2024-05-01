export const getDefaultQuizzes = async () => {
  try {
    const url = "http://localhost:3000/api/quizzes/";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}