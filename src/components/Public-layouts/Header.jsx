import logo from "../../assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { Flex, Typography } from "antd";
import StyledButton from "../Public-StyledComponents/Buttons/StyledButton";
import "../Public-layouts/Styles/Header.css";

export default function Header() {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const location = useLocation();

  return (
    <Flex
      style={{
        direction: "rtl",
      }}
      component="header"
      justify="space-between"
      align="center"
      className="px-24 py-4"
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
