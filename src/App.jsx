import { Route, Routes } from "react-router-dom";
import { HomePage, QuizPage } from "./pages/";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz/:id" element={<QuizPage />} />
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
