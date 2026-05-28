import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import { LanguageProvider } from "./context/languageContext";

function App() {
  return (
    <LanguageProvider>
      <Router basename="/Portfolio-Website">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;