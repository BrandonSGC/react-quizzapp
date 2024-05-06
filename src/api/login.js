export const login = async (form) => {
  try {
    const url = `http://localhost:3000/api/users/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    return { ...data, statusCode: response.status };
  } catch (error) {
    console.error(error);
  }
};
