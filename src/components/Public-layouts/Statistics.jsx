import { Flex, Typography } from "antd";
import React from "react";
import Asset192 from "../../assets/images/Asset192.svg";
import Asset189 from "../../assets/images/Asset189.svg";
import Asset190 from "../../assets/images/Asset190.svg";

export default function Statistics() {
  return (
    <Flex align="center" gap="30px" className="py-24" vertical>
      <Typography.Title level={2} className="mb-0">
        یه سری آمار درباره <span className="text-primary-1000">نقدتو</span>
      </Typography.Title>

      <Typography.Text className="text-lg text-[#6c757d]">
        کسایی که به ما اعتماد کردن نتیجش این شده توی کارشون رشد و پیشرفت داشتن
      </Typography.Text>

      <Flex justify="center" gap="150px">
        <Flex vertical align="center" gap="20px">
          <img src={Asset192} className="h-16 w-16" />

          <Flex vertical align="center">
            <Typography.Title style={{ direction: "rtl" }} className="mb-0">
              ۲ هزار
            </Typography.Title>
            <Typography.Text className="text-base font-semibold text-[#6c757d]">
              تعداد نقدها
            </Typography.Text>
          </Flex>
        </Flex>

        <Flex vertical align="center" gap="20px">
          <img src={Asset189} className="h-16 w-16" />

          <Flex vertical align="center">
            <Typography.Title style={{ direction: "rtl" }} className="mb-0">
              +۱۵
            </Typography.Title>
            <Typography.Text className="text-base font-semibold text-[#6c757d]">
              سازمان‌هایی که به ما اعتماد کردن
            </Typography.Text>
          </Flex>
        </Flex>

        <Flex vertical align="center" gap="20px">
          <img src={Asset190} className="h-16 w-16" />

          <Flex vertical align="center">
            <Typography.Title style={{ direction: "rtl" }} className="mb-0">
              ۹۷٪
            </Typography.Title>
            <Typography.Text className="text-base font-semibold text-[#6c757d]">
              مشتریان خوشحال
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
