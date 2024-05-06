import { AuthPageTemplate, LoginForm } from "../components";

export const LoginPage = () => {
  return (
    <AuthPageTemplate>
      <h2 className="my-2 text-4xl font-black text-center text-purple-950">
        Login Form
      </h2>
      <LoginForm />
    </AuthPageTemplate>
  );
};
