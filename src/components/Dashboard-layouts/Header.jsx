import React, { useState, useEffect } from "react";
import { PageHeader } from "@ant-design/pro-components";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    console.log('صفحه اسکرول شد');
  };
  addEventListener("scroll", (event) => {
    if(window.scrollY  == 0){
      setScroll(false)
      return;
    }
    setScroll(true)});

  // useEffect(() => {
  //   console.log(scroll)
  //   document.body.addEventListener('scroll', handleScroll);
  //   return () => {
  //     document.body.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <PageHeader
      className={`${scroll ? "bg-grey" : "bg-white"} `}
      style={{ direction: "rtl" }}
      title="نقدتو"
      avatar={{
        src: logo,
        style: {
          width: "4.2rem",
          height: "2.5rem",
        },
      }}
    >
      {" "}
    </PageHeader>
  );
};

export default Header;
