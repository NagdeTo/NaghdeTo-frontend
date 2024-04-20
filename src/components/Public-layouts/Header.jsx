import logo from "../../assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { Flex, Typography } from "antd";
import StyledButton from "../Public-StyledComponents/Buttons/StyledButton";
import "../Public-layouts/Styles/Header.css";
import { useEffect } from "react";

export default function Header() {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const location = useLocation();

  //sticky navbar
  function windowScroll() {
    const navbar = document.getElementById("header");
    if (navbar != null) {
      if (window.scrollY >= 50) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", windowScroll);
    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, []);

  return (
    <Flex
      style={{
        direction: "rtl",
      }}
      component="header"
      justify="space-between"
      align="center"
      className="fixed left-0 right-0 top-0 z-[9] h-20 
      px-24 transition-all duration-500 ease-in"
      id="header"
    >
      <Flex align="center">
        <img src={logo} className=" w-28" />
        <Typography className="text-xl font-bold">نقدتو</Typography>
      </Flex>

      <Flex
        justify="space-between"
        gap="56px"
        className="text-sm font-semibold"
      >
        <Link
          to="/"
          className={`${location.pathname === "/" ? "active-link-header" : ""} hover:text-primary-700`}
        >
          خانه
        </Link>
        <Link
          to="#what-is"
          className="hover:text-primary-700"
          onClick={() => scrollToElement("what-is")}
        >
          نقدتو چیه؟
        </Link>
        <Link
          to="#prices"
          className="hover:text-primary-700"
          onClick={() => scrollToElement("prices")}
        >
          قیمتامون چنده؟
        </Link>
        <Link
          to="/about-us"
          className={`${location.pathname === "/about-us" ? "active-link-header" : ""} hover:text-primary-700`}
        >
          ما کی هستیم؟
        </Link>
        <Link
          to="/contact-us"
          className={`${location.pathname === "/contact-us" ? "active-link-header" : ""} hover:text-primary-700`}
        >
          با ما در ارتباط باش
        </Link>
      </Flex>

      <StyledButton>ورود / ثبت‌نام</StyledButton>
    </Flex>
  );
}
