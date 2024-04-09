import Header from "./components/Public-layouts/Header";
import HeroSection from "./components/Public-layouts/HeroSection";
import bg from "./assets/images/shape2.png";
import WhatIs from "./components/Public-layouts/WhatIs";
import Test from "./components/Public-layouts/Test";
import Clients from "./components/Public-layouts/Clients";
import { Divider } from "antd";
import Statistics from "./components/Public-layouts/Statistics";
import ShareWays from "./components/Public-layouts/ShareWays";

const PublicRouter = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})`, backgroundColor: "#f8f9fc " }}
      >
        <Header />
        <HeroSection />
      </div>
      <WhatIs />
      <Test />
      <Clients />
      <Divider className="bg-gray-200" />
      <Statistics />
      <ShareWays />
      {/* <div
        style={{
          zIndex: "-1",
          backgroundColor: "pink",
          width: "100rem",
          height: "70rem",
          borderRadius: "6rem",
          position: "absolute",
          right: "7rem",
          bottom: "0rem",
          opacity: "0.7",
          transform: "rotate(-130deg)",
          boxShadow: "0 0 40px gray",
          left: "-70rem",
        }}
      ></div> */}
    </>
  );
};

export default PublicRouter;
