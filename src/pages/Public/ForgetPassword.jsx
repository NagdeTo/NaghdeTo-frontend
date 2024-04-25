import { Flex } from "antd";
import React from "react";
import forget from "../../assets/images/Forgot password-bro.svg";
import ForgetPasswordForm from "../../components/Public-layouts/ForgetPasswordForm";
import GoToHome from "../../components/Public-layouts/GoToHome";

export default function ForgetPassword() {
  return (
    <Flex justify="center" align="center" className="px-32">
      <ForgetPasswordForm />
      <img src={forget} className="h-[100vh] w-[45vw]" />
      <GoToHome />
    </Flex>
  );
}
