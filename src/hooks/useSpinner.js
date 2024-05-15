import { useState } from "react";

export const useSpinner = () => {
  const [isLoading, setIsLoading] = useState(false);

  return {
    isLoading,
    setIsLoading
  }
}
