import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, QuizPage, RegisterPage } from "./pages/";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/UserContext";
import { AnswersProvider } from "./context/AnswersContext";
import { Header } from "./components";

function App() {
  return (
    <UserProvider>
      <AnswersProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>

        <ToastContainer />
      </AnswersProvider>
    </UserProvider>
  );
}

export default App;
