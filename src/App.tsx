import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplicationPage from "./pages/ApplicationPage";
import LandingPage from "./pages/LandingPage";
import SummaryPage from "./pages/SummaryPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
