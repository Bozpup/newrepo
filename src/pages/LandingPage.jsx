import React from "react";
import PopularTrips from "../components/popularTrips/PopularTrips";
import Trips from "../components/Trips";
import UserStories from "../components/UserStories";
import WhyShuttle from "../components/whyShuttle/WhyShuttle";

const LandingPage = () => {
  return (
    <>
      <div>
        <PopularTrips />
        <WhyShuttle />
        {/* <Trips /> */}
      </div>
    </>
  );
};

export default LandingPage;
