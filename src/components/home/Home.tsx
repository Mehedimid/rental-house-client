"use client";
<<<<<<< HEAD
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";
import SectionHeader from "../shared/SectionHeader";

const Home = () => {
  return (
    <div className="border border-black w-1/2">
      <div className="text-primary font-bold text-5xl">
        Primary, secodary button and section header
      </div>

      {/* primary button demo === */}
      <div onClick={() => console.log("clicked on login button")}>
        <PrimaryButton customClass="m-10">Login</PrimaryButton>
      </div>

      {/* secondary button demo === */}
      <SecondaryButton>Register</SecondaryButton>

      {/* section header demo === */}
      <div>
        <SectionHeader
          title="Latest House Listings"
          subtitle="OUR PROPERTIES"
        ></SectionHeader>
      </div>
=======
import Banner from "../banner/Banner";
import LatestHouseListing from "../latestHouseListing/LatestHouseListing";
import Faq from "../shared/Faq";


const Home = () => {
  return (
    <div>
      <Banner/>
     <LatestHouseListing/>
    <Faq/>
>>>>>>> a879d46ddb19a3e457f100f58d277e24e76ec725
    </div>
  );
};

export default Home;
