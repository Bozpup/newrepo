import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import PopularTrips from "./components/popularTrips/PopularTrips";
import WhyShuttle from "./components/whyShuttle/WhyShuttle";

function App() {
  return (
    <div className="app">
      <PopularTrips />
      <WhyShuttle />
      <ForgotPassword />
    </div>
  );
}

export default App;
