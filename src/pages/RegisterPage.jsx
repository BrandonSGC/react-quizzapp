import { AuthPageTemplate, RegisterForm } from "../components";

export const RegisterPage = () => {
  return (
    <AuthPageTemplate>
      <h2 className="my-2 text-4xl font-black text-center text-purple-950">
        Create User
      </h2>
      <RegisterForm />
    </AuthPageTemplate>
  );
};
