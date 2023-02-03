import React from "react";
import { Layout } from "../components/layout/Layout";
import PopularTrips from "../components/popularTrips/PopularTrips";
import Trips from "../components/Trips";
import { Transco } from "../components/transco/transco";
// import UserStories from "../components/UserStories";
import WhyShuttle from "../components/whyShuttle/WhyShuttle";

const LandingPage = () => {
  return (
    <>
      <div>
        <Layout>
          <PopularTrips />
          <Trips />
          <Transco />
          <WhyShuttle />
          {/* <UserStories /> */}
        </Layout>
      </div>
    </>
  );
};

export default LandingPage;
