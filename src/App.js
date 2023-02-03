import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
