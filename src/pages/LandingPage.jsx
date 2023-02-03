import React from "react";
import { Layout } from "../components/layout/Layout";
import PopularTrips from "../components/popularTrips/PopularTrips";
import Trips from "../components/Trips";
import { Transco } from "../components/transco/transco";
// import UserStories from "../components/UserStories";
import WhyShuttle from "../components/whyShuttle/WhyShuttle";
import MainNavigation from "../components/layout/MainNavigation";
import Footer from "../components/layout/Footer";

const LandingPage = () => {
  return (
    <>
      <div>
        {/* <Layout> */}
        <MainNavigation />
        <PopularTrips />
        <Trips />
        <Transco />
        <WhyShuttle />
        {/* <UserStories /> */}
        {/* </Layout> */}
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
