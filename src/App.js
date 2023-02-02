import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import PasswordVerification from './pages/PasswordVerification';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/password_verification" element={<PasswordVerification />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
