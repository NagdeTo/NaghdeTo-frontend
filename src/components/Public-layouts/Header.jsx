import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Flex, Typography } from "antd";
import StyledButton from "../Public-StyledComponents/Buttons/StyledButton";

export default function Header() {
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
        <Link to="/" className="hover:text-primary-700">
          خانه
        </Link>
        <Link to="/" className="hover:text-primary-700">
          نقدتو چیه؟
        </Link>
        <Link to="/" className="hover:text-primary-700">
          قیمتامون چنده؟
        </Link>
        <Link to="/" className="hover:text-primary-700">
          ما کی هستیم؟
        </Link>
        <Link to="/" className="hover:text-primary-700">
          با ما در ارتباط باش
        </Link>
      </Flex>

      <StyledButton
        className="h-12 w-32 rounded-lg border-primary-1000
       bg-primary-1000 font-medium text-white shadow-md
        hover:bg-primary-900 focus-visible:outline-none"
      >
        ورود / ثبت‌نام
      </StyledButton>
    </Flex>
  );
}
