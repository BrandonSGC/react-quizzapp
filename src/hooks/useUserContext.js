import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useUserContext = () => {
  const { user, setUser, initialState } = useContext(UserContext);

  return {
    ...user,
    user,
    setUser,
    initialState,
  };
};
