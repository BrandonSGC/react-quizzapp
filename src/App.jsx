import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, QuizPage, RegisterPage } from "./pages/";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
