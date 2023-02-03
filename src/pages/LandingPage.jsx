import React from "react";
import PopularTrips from "../components/popularTrips/PopularTrips";
import Trips from "../components/Trips";
//import UserStories from "../components/UserStories";
import { Transco } from '../components/transco/transco';


const LandingPage = () => {
  return (
    <>
      <div>
        <PopularTrips />
        <Trips />
        <Transco />
      </div>
    </>
  );
};

export default LandingPage;
