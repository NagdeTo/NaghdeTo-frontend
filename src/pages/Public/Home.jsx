import React from "react";
import HeroSection from "../../components/Public-layouts/HeroSection";
import bg from "../../assets/images/shape2.png";
import WhatIs from "../../components/Public-layouts/WhatIs";
import Test from "../../components/Public-layouts/Test";
import Clients from "../../components/Public-layouts/Clients";
import { Divider, Flex } from "antd";
import Statistics from "../../components/Public-layouts/Statistics";
import ShareWays from "../../components/Public-layouts/ShareWays";
// import ClientComments from "../../components/Public-layouts/ClientComments";
import Prices from "../../components/Public-layouts/Prices";
import Decorative from "../../components/Public-layouts/Decorative";
import GoToTop from "../../components/Public-layouts/GoToTop";
import { useState, useEffect } from "react";

export default function Home() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  function handleScrollToTop() {
    const heroSectionHeight =
      document.getElementById("hero-section").offsetHeight;
    if (window.scrollY > heroSectionHeight) {
      setShowGoToTop(true);
    } else {
      setShowGoToTop(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollToTop);
    return () => {
      window.removeEventListener("scroll", handleScrollToTop);
    };
  }, []);

  return (
    <>
      <Flex
        vertical
        style={{
          backgroundImage: `url(${bg})`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <HeroSection />
        <Decorative />
      </Flex>
      <WhatIs />
      <Test />
      <Clients />
      <Divider className="bg-gray-200" />
      <Statistics />
      <ShareWays />
      {/* <ClientComments /> */}
      <Prices />
      {showGoToTop && <GoToTop />}
    </>
  );
}
