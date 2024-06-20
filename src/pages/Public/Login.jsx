import { Flex } from "antd";
import React from "react";
import login from "../../assets/images/Mobile login-bro.svg";
import LoginForm from "../../components/Public-layouts/LoginForm";
import GoToHome from "../../components/Public-layouts/GoToHome";

export default function Login() {
  return (
    <Flex justify="center" className="px-32">
      <img src={login} className="h-[100%] w-[50%]" />
      <LoginForm />
      <GoToHome />
    </Flex>
  );
}
