export const logout = async () => {
  try {
    const url = `http://localhost:3000/api/users/logout`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
