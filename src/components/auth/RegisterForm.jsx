import { useNavigate } from "react-router-dom";
import { createUser } from "../../api";
import { createNotification } from '../../helpers';
import { useForm, useSpinner, useUserContext } from "../../hooks";
import { Spinner } from '..';

const initialForm = {
  name: "",
  surname: "",
  email: "",
  username: "",
  password: "",
  passwordConfirmation: "",
};

export const RegisterForm = () => {
  const { form, onInputChange, onResetForm } = useForm(initialForm);
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useSpinner();

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate password confirmation.
    if (form.password !== form.passwordConfirmation) {
      createNotification("Password doesn't match.", "warning");
      setIsLoading(false);
      return;
    }

    const response = await createUser(form);

    if (response.statusCode === 409 || response.statusCode === 500) {
      createNotification(response.message, "error");
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    createNotification(response.message, "success");

    // Set user context
    setUser({...response.user, isAuthenticated: true});
    onResetForm();
    navigate('/');
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
              className="block w-full p-2 bg-purple-100 rounded text-purple-950"
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              onChange={onInputChange}
              value={form.name}
              required
            />
          </div>

          <div className="w-full">
            <label className="text-purple-900" htmlFor="surname">
              Surname
            </label>
            <input
              className="block w-full p-2 bg-purple-100 rounded text-purple-950"
              type="text"
              id="surname"
              name="surname"
              placeholder="Your surname"
              onChange={onInputChange}
              value={form.surname}
              required
            />
          </div>
        </div>

        <div className="">
          <label className="text-purple-900" htmlFor="email">
            Email
          </label>
          <input
            className="block w-full p-2 bg-purple-100 rounded text-purple-950"
            type="email"
            id="email"
            name="email"
            placeholder="email@example.com"
            onChange={onInputChange}
            value={form.email}
            required
          />
        </div>

        <div className="">
          <label className="text-purple-900" htmlFor="username">
            Username
          </label>
          <input
            className="block w-full p-2 bg-purple-100 rounded text-purple-950"
            type="text"
            id="username"
            name="username"
            placeholder="Your username"
            onChange={onInputChange}
            value={form.username}
            required
          />
        </div>

        <div className="">
          <label className="text-purple-900" htmlFor="password">
            Password
          </label>
          <input
            className="block w-full p-2 bg-purple-100 rounded text-purple-950"
            type="password"
            id="password"
            name="password"
            placeholder="Your password"
            onChange={onInputChange}
            value={form.password}
            required
          />
        </div>

        <div className="">
          <label className="text-purple-900" htmlFor="passwordConfirmation">
            Confirm Password
          </label>
          <input
            className="block w-full p-2 bg-purple-100 rounded text-purple-950"
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            placeholder="Confirm password"
            onChange={onInputChange}
            value={form.passwordConfirmation}
            required
          />
        </div>

        <button className="w-full p-2 font-semibold text-white bg-purple-500 rounded hover:bg-purple-600">
          Create User
        </button>

        {isLoading && <Spinner />}
      </form>
    </>
  );
};
