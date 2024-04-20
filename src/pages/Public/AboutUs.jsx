import { Flex } from "antd";
import React, { useState, useEffect } from "react";
import IntroMembers from "../../components/Public-layouts/IntroMembers";
import bg from "../../assets/images/shape2.png";
import GoToTop from "../../components/Public-layouts/GoToTop";

export default function AboutUs() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  function handleScrollToTop() {
    if (window.scrollY > 100) {
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
        justify="center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <IntroMembers />
      </Flex>
      {showGoToTop && <GoToTop />}
    </>
  );
}
