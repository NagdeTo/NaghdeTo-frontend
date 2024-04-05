import { Flex } from "antd";
import React from "react";
import spotify from "../../assets/images/spotify.svg";
import shopify from "../../assets/images/shopify.svg";
import paypal from "../../assets/images/paypal.svg";
import lenovo from "../../assets/images/lenovo.svg";
import google from "../../assets/images/google.svg";
import amazon from "../../assets/images/amazon.svg";

export default function Clients() {
  return (
    <Flex className="py-16" justify="center" gap="100px">
      <img src={spotify} className="h-8" />
      <img src={shopify} className="h-8" />
      <img src={paypal} className="h-8" />
      <img src={lenovo} className="h-8" />
      <img src={google} className="h-8" />
      <img src={amazon} className="h-8" />
    </Flex>
  );
}
