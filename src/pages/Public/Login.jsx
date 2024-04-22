import { Flex } from "antd";
import React from "react";
import login from "../../assets/images/Mobile login-bro.svg";
import LoginForm from "../../components/Public-layouts/LoginForm";

export default function Login() {
  return (
    <Flex justify="center">
      <img src={login} className="h-[100vh] w-[45vw]" />
      <LoginForm />
    </Flex>
  );
}
