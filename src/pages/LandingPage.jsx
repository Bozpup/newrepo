import React from "react";
import PopularTrips from "../components/popularTrips/PopularTrips";
import Trips from "../components/Trips";
import { Transco } from "../components/transco/transco";
import UserStories from "../components/UserStories";
import WhyShuttle from "../components/whyShuttle/WhyShuttle";
import MainNavigation from "../components/layout/MainNavigation";
import Footer from "../components/layout/Footer";

const LandingPage = () => {
  return (
    <>
      <div>
        <MainNavigation />
          <PopularTrips />
          <WhyShuttle />
          <Trips />
          <UserStories />
          <Transco />
       <Footer />
      </div>
    </>
  );
};

export default LandingPage;
