import { Row, Col } from "antd";
import React from "react";
import signup from "../../assets/images/Get in touch-pana.svg";
import GoToHome from "../../components/Public-layouts/GoToHome";
import SignUpForm from "../../components/Public-layouts/SignUpForm";

export default function SignUp() {
  return (
    <Row className="px-32">
      <Col span={13}>
        <img src={signup} className="h-[100%] w-[100%]" />
      </Col>
      <Col span={11} className="flex justify-center">
        <SignUpForm />
      </Col>
      <GoToHome />
    </Row>
  );
}
