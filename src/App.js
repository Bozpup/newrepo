import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailVerification from "./pages/EmailVerification";
import { register } from "swiper/element/bundle";
import ForgotPassword from "./pages/ForgotPassword";
import LandingPage from "./pages/LandingPage";
import PasswordVerification from "./pages/PasswordVerification";
import AccountOverview from "./pages/AccountOverview";

function App() {
  register();

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/password-verification"
            element={<PasswordVerification />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/account-overview" element={<AccountOverview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
