import { createContext, useState } from "react";

export const UserContext = createContext();

const initialState = {
  id: "",
  name: "",
  surname: "",
  email: "",
  username: "",
  isAuthenticated: false,
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  return (
    <UserContext.Provider value={{ user, setUser, initialState }}>
      {children}
    </UserContext.Provider>
  );
};
