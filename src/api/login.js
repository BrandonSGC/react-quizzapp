import { API } from '../constants';

export const login = async (form) => {
  try {
    const url = `${API}/api/users/login`;
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
