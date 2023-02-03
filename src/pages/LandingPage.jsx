import React from "react";
import { Layout } from "../components/layout/Layout";
import PopularTrips from "../components/popularTrips/PopularTrips";
import SearchFeature from "../components/SearchFeature";
import Trips from "../components/Trips";
// import UserStories from "../components/UserStories";

const LandingPage = () => {
  return (
    <>
      <div>
        <Layout>
          <PopularTrips />
          <Trips />
        </Layout>
      </div>
    </>
  );
};

export default LandingPage;
