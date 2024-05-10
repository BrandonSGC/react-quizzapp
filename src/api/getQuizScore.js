export const getQuizScore = async (quizId, answers) => {
  try {
    const url = `http://localhost:3000/api/quizzes/${quizId}/score`;
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