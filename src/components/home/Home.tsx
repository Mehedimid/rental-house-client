"use client";
import Banner from "../banner/Banner";
import LatestHouseListing from "../latestHouseListing/LatestHouseListing";
import Faq from "../shared/Faq";


const Home = () => {
  return (
    <div>
      <Banner/>
     <LatestHouseListing/>
    <Faq/>
    </div>
  );
};

export default Home;
