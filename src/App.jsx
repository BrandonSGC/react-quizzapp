import { Route, Routes } from "react-router-dom";
import { CheckAnswersPage, HomePage, LoginPage, QuizPage, RegisterPage } from "./pages/";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/UserContext";
import { AnswersProvider } from "./context/AnswersContext";
import { Header } from "./components";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    {/*Coment from idx google...*/}
    <UserProvider>
      <AnswersProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Authorization */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Quiz related */}
          <Route path="/quizzes/:id" element={<QuizPage />} />
          <Route path="/quizzes/:id/answers" element={<CheckAnswersPage />} />
          {/* Any other route redirect to HomePage. */}
          <Route path="/*" element={<HomePage />} />
        </Routes>
        <ToastContainer />
      </AnswersProvider>
    </UserProvider>
  );
}

export default App;
