import React from "react";
import PopularTrips from "../components/popularTrips/PopularTrips";
import Trips from "../components/Trips";
import UserStories from "../components/UserStories";

const LandingPage = () => {
  return (
    <>
      <div>
        <PopularTrips />
        <UserStories />
        {/* <Trips /> */}
      </div>
    </>
  );
};

export default LandingPage;
