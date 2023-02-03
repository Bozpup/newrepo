import React from "react";
import { Layout } from "../components/layout/Layout";
import PopularTrips from "../components/popularTrips/PopularTrips";
import SearchFeature from "../components/SearchFeature";
import Trips from "../components/Trips";
import UserStories from "../components/UserStories";
import WhyShuttle from "../components/whyShuttle/WhyShuttle";

const LandingPage = () => {
  return (
    <>
      <div>
        <Layout>
          <PopularTrips />
          <WhyShuttle />
          <Trips />
          {/* <UserStories /> */}
          
        </Layout>
      </div>
    </>
  );
};

export default LandingPage;
