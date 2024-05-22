import { useForm, useSpinner, useUserContext } from "../../hooks";
import { login } from "../../api";
import { createNotification } from "../../helpers";
import { useNavigate, Link } from "react-router-dom";
import { Spinner } from "..";

const initalState = {
  username: "",
  password: "",
};

export const LoginForm = () => {
  const { form, onInputChange, onResetForm } = useForm(initalState);
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const { isLoading, setIsLoading} = useSpinner();

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await login(form);
    if (response.statusCode !== 200) {
      createNotification(response.message, "error");
      setIsLoading(false);
      return;
    }
    setUser({ ...response.user, isAuthenticated: true });
    setIsLoading(false);
    createNotification(response.message, "success");
    navigate("/");
    onResetForm();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label className="text-purple-900" htmlFor="username">
          Username
        </label>
        <input
          className="block w-full p-2 bg-purple-100 rounded text-purple-950"
          type="text"
          name="username"
          id="username"
          placeholder="Your username"
          required
          value={form.username}
          onChange={onInputChange}
        />
      </div>

      <div className="">
        <label className="text-purple-900" htmlFor="password">
          Password
        </label>
        <input
          className="block w-full p-2 bg-purple-100 rounded text-purple-950"
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
          required
          value={form.password}
          onChange={onInputChange}
        />
      </div>

      <button className="w-full p-2 font-semibold text-white bg-purple-500 rounded hover:bg-purple-600">
        Login
      </button>
      
      <p className="text-sm text-slate-900">
        Don't have an account?{" "}
        <Link to="/register" className="text-purple-700">
          Sign In
        </Link>
      </p>

      {isLoading && <Spinner />}
    </form>
  );
};
