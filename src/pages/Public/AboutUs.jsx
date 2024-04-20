import { Flex } from "antd";
import React from "react";
import IntroMembers from "../../components/Public-layouts/IntroMembers";
import bg from "../../assets/images/shape2.png";

export default function AboutUs() {
  return (
    <Flex
      justify="center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <IntroMembers />
    </Flex>
  );
}
