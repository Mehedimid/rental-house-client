"use client";
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";

const Home = () => {
  return (
    <div className="border border-black w-1/2">
      Home
      <div onClick={()=>console.log("clicked on login button")}>
        <PrimaryButton customClass="m-10">Login</PrimaryButton>
      </div>
      <SecondaryButton>Register</SecondaryButton>
    </div>
  );
};

export default Home;
