import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
