import { toast, Bounce } from "react-toastify";

export const createNotification = (message, type) => {
  toast[type](message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};
