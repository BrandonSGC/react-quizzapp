import { createUser, createNotification } from "../helpers/";
import { useForm } from "../hooks";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for React Toastify

export const RegisterForm = () => {
  const initialForm = {
    name: "",
    surname: "",
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  };

  const { form, onInputChange } = useForm(initialForm);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate password confirmation.
    if (form.password !== form.passwordConfirmation) {
      createNotification("Password doesn't match.", "warning");
      return;
    }

    const response = await createUser(form);

    if (response.statusCode === 409 || response.statusCode === 500) {
      createNotification(response.message, "error");
      return;
    }
    createNotification(response.message, "success");
  };

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-3">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="w-full">
            <label className="text-purple-900" htmlFor="name">
              Name
            </label>
            <input
              required
              className="block w-full p-3 bg-purple-100 rounded text-purple-950"
              type="text"
              placeholder="Your name"
              id="name"
              name="name"
              onChange={onInputChange}
            />
          </div>

          <div className="w-full">
            <label className="text-purple-900" htmlFor="surname">
              Surname
            </label>
            <input
              required
              className="block w-full p-3 bg-purple-100 rounded text-purple-950"
              type="text"
              placeholder="Your surname"
              id="surname"
              name="surname"
              onChange={onInputChange}
            />
          </div>
        </div>

        <div className="">
          <label className="text-purple-900" htmlFor="email">
            Email
          </label>
          <input
            required
            className="block w-full p-3 bg-purple-100 rounded text-purple-950"
            type="email"
            placeholder="email@example.com"
            id="email"
            name="email"
            onChange={onInputChange}
          />
        </div>

        <div className="">
          <label className="text-purple-900" htmlFor="username">
            Username
          </label>
          <input
            required
            className="block w-full p-3 bg-purple-100 rounded text-purple-950"
            type="text"
            placeholder="Your username"
            id="username"
            name="username"
            onChange={onInputChange}
          />
        </div>

        <div className="">
          <label className="text-purple-900" htmlFor="password">
            Password
          </label>
          <input
            required
            className="block w-full p-3 bg-purple-100 rounded text-purple-950"
            type="password"
            placeholder="Your password"
            id="password"
            name="password"
            onChange={onInputChange}
          />
        </div>

        <div className="">
          <label className="text-purple-900" htmlFor="passwordConfirmation">
            Confirm Password
          </label>
          <input
            required
            className="block w-full p-3 bg-purple-100 rounded text-purple-950"
            type="password"
            placeholder="Confirm password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            onChange={onInputChange}
          />
        </div>

        <button className="w-full p-2 font-semibold text-white bg-purple-500 rounded hover:bg-purple-600">
          Create User
        </button>
      </form>
    </>
  );
};
