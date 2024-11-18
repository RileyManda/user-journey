import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplicationPage from "./pages/ApplicationPage";
import LandingPage from "./pages/LandingPage";
import SummaryPage from "./pages/SummaryPage";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
