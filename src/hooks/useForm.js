import { useState } from "react"

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  const onInputFileChange = (e) => {
    const { name, files} = e.target;
    setForm({
      ...form,
      [name]: files[0].name
    });
  }

  const onResetForm = () => {
    setForm(initialState)
  }

  return {
    ...form,
    form,
    onInputChange,
    onInputFileChange,
    onResetForm,
    setForm,
  }
}