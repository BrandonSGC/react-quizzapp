import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const onResetForm = () => {
    setForm(initialState);
  };

  return {
    ...form,
    form,
    onInputChange,
    onResetForm,
    setForm,
  };
};
