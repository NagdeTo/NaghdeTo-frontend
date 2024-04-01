import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Button, Flex, Typography } from "antd";

export default function Header() {
  return (
    <Flex
      style={{ direction: "rtl" }}
      component="header"
      justify="space-between"
      align="center"
      className="px-24 py-6"
    >
      <Flex align="center">
        <img src={logo} className=" w-28" />
        <Typography className="text-xl font-bold">نقدتو</Typography>
      </Flex>

      <Flex justify="space-between" gap="56px" className="text-sm font-medium">
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

      <Button
        className="h-12 w-32 rounded-lg border-primary-1000
       bg-primary-1000 font-medium text-white hover:bg-primary-900 focus-visible:outline-none"
      >
        ورود / ثبت نام
      </Button>
    </Flex>
  );
}
