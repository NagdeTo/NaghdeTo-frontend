import { Collapse, Flex, Typography, theme } from "antd";
import React from "react";
import faq from "../../assets/images/faq.svg";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import "../Public-layouts/Styles/WhatIs.css";

export default function WhatIs() {
  return (
    <Flex justify="center" align="center" gap="100px" className="py-24">
      <img src={faq} className="w-1/3" />
      <Collapse
        accordion
        defaultActiveKey={0}
        className="h-full w-2/5 "
        style={{ direction: "rtl" }}
      >
        <CollapsePanel header="نقدتو چیه؟">
          <Typography.Text className="text-base text-[#6c757d]">
            تا حالا شده توی شرکت یا سازمانی بخوای نظر دیگران رو درباره خودت یا
            چیزی بدونی؟ خب ما هدفمون این بود پلتفرمی بسازیم تا افراد بتونن به
            صورت ناشناس نظر خودشون رو بدون رودربایستی اعلام کنن. از اونجا که
            افراد با وویس دادن راحت تر هستن، ما میایم با هوش مصنوعی هویت رو از
            صوت حذف می‌کنیم؛ اینطوری مطلب تغییر نمی‌کنه و دیگه کسی متوجه نمیشه
            این صدای توعه. اینطوری با خیال راحت صحبت می‌کنی و نظر واقعیتو میگی
            :)
          </Typography.Text>
        </CollapsePanel>

        <CollapsePanel header="به درد کیا می‌خوره؟">
          <ol className="mr-8 list-disc text-base text-[#6c757d]">
            <li>
              کسایی که می‌خوان نظر بقیه رو درباره شخص یا مطلبی بدونن و می‌خوان
              جواب‌های صادقانه بشنون
            </li>
            <li>
              کسایی که دوست دارن صحبت‌شون رو صادقانه ولی ناشناس به گوش بقیه
              برسونن
            </li>
            <li>وبسایت هایی که نظرات مشتریان و کاربران براشون مهمه</li>
            <li>
              ساتید دانشگاه‌ها یا دبیران مدارس که میخوان نظرات دانش‌آموزان رو
              درباره خودشون بدونن
            </li>
            <li>مدیران سازمان‌ها که می‌خوان نظرات کارمندها رو بدونن.</li>
          </ol>
        </CollapsePanel>

        <CollapsePanel header="خب که چی؟">
          <Typography.Text className="text-base text-[#6c757d]">
            دونستن اینکه افراد نسبت به اتفاقات و رویدادها در سازمان‌ها چه نظری
            دارن هیمشه در تصمیم‌گیری بهتر نقش مهمی داشته اما وقتی بحث نظر
            صادقانه باشه، خیلی مواقع افراد نظر واقعیشونو نمیگن چون نمیخوان
            هویتشون لو بره؛ اما ما کاری می‌کنیم که این نگرانی از بین بره و هر
            شخص بتونه کاملا ناشناس نقد یا پیشنهاد خودشو بگه.
          </Typography.Text>
        </CollapsePanel>
      </Collapse>
    </Flex>
  );
}
