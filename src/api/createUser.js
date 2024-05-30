import { API } from '../constants';

export const createUser = async (user) => {
  try {
    const url = `${API}/api/users`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return { ...data, statusCode: response.status };
  } catch (error) {
    console.error(error);
  }
};
